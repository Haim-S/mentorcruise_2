const {Schema, model} = require("mongoose");

const messageSchema = new Schema({
   
    from: {type: Schema.Types.ObjectId, ref: "User", require: true},
    to: {type: Schema.Types.ObjectId, ref: "User", require: true},
    message: {type: String, required: true},
    data: {type: Date, default: Date.now()},
    
});


const Message = model("Message", messageSchema);
module.exports = Message;