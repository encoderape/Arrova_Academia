const express = require('express');
const morgan = require('morgan');

require('dotenv').config();
const port = process.env.PORT;
const server_success_msg = process.env.SERVER_ONLINE_MSG;
const server_url = process.env.SERVER_URL_MSG;
const localhost = process.env.LOCALHOST_URL;

require('./config/dbconnect.js');

const cors = require('./middlewares/cors.js');

const app = express();
app.use(morgan("combined"));
app.use(express.urlencoded({
        extended: true
    })
);
app.use(express.json());
app.use(cors);

app.listen(port, () => {
    console.log(server_success_msg + port);
    console.log(server_url + localhost);
});
