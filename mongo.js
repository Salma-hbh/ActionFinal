const mongoose= require('mongoose');
require('dotenv/config');
const DB_CONNECTION="mongodb://username:user123@cluster0-shard-00-00.4r0z1.mongodb.net:27017,cluster0-shard-00-01.4r0z1.mongodb.net:27017,cluster0-shard-00-02.4r0z1.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-2lygxn-shard-0&authSource=admin&retryWrites=true&w=majority"

module.exports= async () =>{
    await mongoose.connect(DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    return mongoose
}