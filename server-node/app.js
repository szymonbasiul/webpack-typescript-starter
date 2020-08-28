const fs = require('fs'); //wcytywanie pliku
const express = require('express');
const path = require('path');
const { request } = require('http');
const { dirname } = require('path');
const app = express();
const cors = require('cors');
let testPostService = require('./server_fetch_Service');

app.use(express.json({limit: '1mb'}));
app.use(cors());
app.use('/api', require('./server_fetch_Service'));  


app.listen(3533, () => {console.log('restarted')});
