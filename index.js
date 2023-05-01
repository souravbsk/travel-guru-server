const express = require("express");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors())
const AllDestination = require("./datas/destination.json")
const roomData = require("./datas/room.json")
app.get("/",(req,res) => {
    res.send("hello this travel guru server")
})
app.get("/alldestinations",(req,res) => {
res.send(AllDestination);
})

app.get("/destination/:id",(req,res) => {
    const dnId = parseFloat(req.params.id);
    const findDestinationData = AllDestination.find(dn => dn.id === dnId);
   res.send(findDestinationData)
})

app.get("/rooms",(req,res) => {
    res.send(roomData)
})

app.listen(port,() => {
    console.log(`travel guru server start in ${port}`);
})