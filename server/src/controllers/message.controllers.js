const Message = require("../models/message.model");



exports.CreateOneMessage = async (req, res, next) => {
    // need to make validation if is approve is can send message, and if is pandding, cnot send message.
        const newMsg = await Message.create(req.body);
        res.status(201).send(newMsg);

}

exports.getAllMyMessage = async (req, res, next) => {
    const userFrom = req.userId;
    const userTo = req.userId;


  const myMessageSend =  await Message.find({from: userFrom});
  const myMessageReceived =  await Message.find({ to: userTo});
  res.status(200).send({messageSend: myMessageSend || "null", messageReceived: myMessageReceived || "not found"});
}

exports.DeleteOneMessage = async (req, res, next) => {

    const deleteMsg = await Message.deleteOne({_id: req.params.id || req.body.id});
    res.status(200).send(deleteMsg);

}