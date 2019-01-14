const glob = require('glob')
const path = require('path')

const cwd = path.resolve(__dirname)

const registerControllers = (app) => {
    const files = glob.sync('../../app/controllers/**/**.js', { cwd })
    
    files.forEach(file => {
        const fileName = file.match(/\w+.js$/gm)[0]
        const isNested = file.replace(fileName, '') !== '../../app/controllers/'

        const nestReg = new RegExp(`\/..\/app\/controllers(\\S+)${fileName}`, 'gm')        

        try {
            const controller = require(file)
            const { verb, method } = controller
            let { route } = controller
            
            if (isNested) {
                const nesting = file.replace(fileName, '').replace('../../app/controllers/', '')
                route = '/' + (nesting + route).replace(/\/\//gm, '/')
            }
            
            app[verb](route, method)
        } catch (err) {
            console.error('Houve um erro ao registrar o controller:' + file)
        }
    })
}

module.exports = registerControllers