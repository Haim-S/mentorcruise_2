require("dotenv").config();
const {createServer} = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const httpServer = createServer(app);
const initailMongoConnection = require("./database/initialConnection");
const routes = require("./routes/index");

app.use(cors());
app.use(express.json());
app.use(routes);




const {Server} = require("socket.io");
const socketMain = require("./socket.io/socketMain");

const io = new Server(httpServer,{
    cors: {
        origin: "http://localhost:3000",
    },
});





io.on("connection", socketMain);

initailMongoConnection()
const port = process.env.PORT || 9000;

httpServer.listen(port, () => {
    console.log(`running on port ${port}`);
})



