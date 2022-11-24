const express= require('express')
const app = require('./app')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8080
const {dbConn} = require('./utils/databaseConnect')

dbConn();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })