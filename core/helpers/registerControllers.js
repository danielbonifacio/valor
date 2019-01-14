const glob = require('glob')
const path = require('path')

const cwd = path.resolve(__dirname)

const registerControllers = (app) => {
    const files = glob.sync('../../app/controllers/**/**.js', { cwd })
    
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

            Object.keys(controller).map(key => {
                !!controller[key] && app[key](route, controller[key])
            })

        } catch (err) {
            console.log(err)
            console.error('Houve um erro ao registrar o controller:' + file)
        }
    })
}

module.exports = registerControllers