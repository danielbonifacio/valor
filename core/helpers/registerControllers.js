const glob = require('glob')
const path = require('path')

const cwd = path.resolve(__dirname)

const registerControllers = (app) => {
    const files = glob.sync('../../app/controllers/**/**.js', { cwd })
    console.clear()
    
    files.forEach(file => {
        const fileName = file.match(/\w+.js$/gm)[0]
        const isNested = file.replace(fileName, '') !== '../../app/controllers/'

        try {
            const controller = require(file)
            let { route } = controller
            
            // normaliza a rota com o slash antes
            route = route.charAt(0) === '/' ? route : `/${route}`
            
            if (isNested) {
                const nesting = file.replace(fileName, '').replace('../../app/controllers/', '')
                route = '/' + (nesting + route).replace(/\/\//gm, '/')
            }


            /**
             * é aqui que a magia negra acontece
             * esse cara registra os controllers e os middlewares
             * da forma mais performática possível
             * 
             * não futuca se não tiver estrita necessidade
             */
            Object.keys(controller).map(key => {
                if ((key === 'post' || key === 'get' || key === 'put' || key === 'delete') && controller[key] !== false) {
                    const middlewares = []

                    if (controller.middlewares[key]) {
                        middlewares.push(...controller.middlewares[key])
                    } else if (controller.middlewares['*']) {
                        middlewares.push(...controller.middlewares['*'])                    
                    }

                    if (typeof controller[key] === 'object') {
                        controller[key].map(ctr => {
                            if (ctr.middlewares) {
                                middlewares.push(...ctr.middlewares)
                            }

                            newRoute = route + `${ctr.endpoint}`.replace(/\/\//gi, '/')

                            app[key](newRoute, ...middlewares, ctr.run)
                        })
                        return
                    }

                    app[key](route, ...middlewares, controller[key])
                }
            })

        } catch (err) {
            console.log('\n\n' + err.message)
            console.error('Houve um erro ao registrar o controller:' + file)
        }
    })
}

module.exports = registerControllers