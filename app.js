//const express = require('express')
import app from 'express';
const app = express()

const contacts = [{
    nom: "Xavier",
    telephone: "0434343434"
},
{
    nom: "Robert",
    telephone: "0534343434"
}]

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/api/contacts', function (req, res) {
    res.status(200).json(contacts)
})

module.exports = app
