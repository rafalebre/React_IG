const mongoose = require("mongoose")

// Use MongoDB Atlas connection string from environment variables
const dbConnectionString = process.env.MONGODB_URI || `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jcsoica.mongodb.net/react_ig?retryWrites=true&w=majority`

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(dbConnectionString)
        console.log("Conectou ao banco!")

        return dbConn
    } catch (error) {
        console.log(error)
    }
}

conn()

module.exports = conn