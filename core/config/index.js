module.exports = {
    app: {
        port: process.env.PORT || 3000
    },
    db: {
        name: process.env.DB_DATABASE || 'hptest',
        user: process.env.DB_USERNAME || 'root',
        pass: process.env.DB_PASSWORD || 'HP@123',
        host: process.env.DB_HOSTNAME || 'localhost',
        driver: process.env.DB_DRIVER || 'mysql',
    }
}
