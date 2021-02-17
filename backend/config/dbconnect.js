const mongoose = require('mongoose');

require('dotenv').config();
const db_uri = process.env.DEV_BBDD_URI;
const db_success_msg = process.env.MONGO_CONNECTION_OK_MSG;

mongoose.connect(db_uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    }
)
    .then(() => console.log(db_success_msg))
    .catch(console.error);
