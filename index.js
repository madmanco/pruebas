const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();

const getDB=require('./getDB.js');

const serviceAccount = require("./permisos.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://backend-api-ae.firebaseio.com"
});

