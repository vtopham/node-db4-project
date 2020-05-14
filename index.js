const express = require('express');

const server = require('./server.js')

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({message: "Go get em tiger"})
})

server.listen(4000, _ => {
    console.log("Listening on port 4000")
})

