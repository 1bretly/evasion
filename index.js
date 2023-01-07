const express = require("express")
const app = express()
const importSurvivorData = require("./survivors.json")
const importKillData = require("./killer.json")
let port = process.env.PORT || 3000

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  next()
})

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.get("/friends-survivors", (req, res) => {
  res.send(importSurvivorData)
})

app.get("/friends-killers", (req, res) => {
  res.send(importKillData)
})

app.listen(port, () => {
  console.log(`Example app is listening on port http://localhost:${port}`)
})
