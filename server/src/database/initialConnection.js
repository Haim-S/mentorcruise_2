const mongoose = require("mongoose");


const mongoConfig = {
    base_url: process.env.MONGO_URL,
    folder_name: process.env.MONGO_FOLDER_NAME,
    local_address : process.env.MONGO_ADDRESS,
};

const url = mongoConfig.base_url
.replace("<local_address>", mongoConfig.local_address)
.replace("<folder_name>", mongoConfig.folder_name);

const initialMongoConnection = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(url)
    .then(()=> {
        console.log("Mongo DB database connection");
    }).catch((error)=> {
        console.log(error);
    })
};

module.exports = initialMongoConnection;