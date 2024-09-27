const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'path/to/database.sqlite'
})

async function testConnection() {
    try {
        await sequelize.authenticate()
        console.log('Conexão feita com sucesso')
    } catch (error) {
        console.error('Não foi possível realizar a conexão', error)
    }
}

testConnection()

//diferença da arrow function