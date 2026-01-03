const mongoose = require("mongoose")

const conn = async () => {
    try {
        // Usando MongoDB local para desenvolvimento
        const dbConn = await mongoose.connect('mongodb://localhost:27017/react_ig')
        console.log("Conectou ao banco local!")

        return dbConn
    } catch (error) {
        console.log(error)
    }
}

conn()

module.exports = conn