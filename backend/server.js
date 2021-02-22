const express = require('express');
const morgan = require('morgan');

require('dotenv').config();
const port = process.env.PORT;
const server_success_msg = process.env.SERVER_ONLINE_MSG;
const server_url = process.env.SERVER_URL_MSG;
const localhost = process.env.LOCALHOST_URL;

require('./config/dbconnect.js');

const cors = require('./middlewares/cors.js');
const endpointConfig = require('./utils/router-config.js');
const endpoints = require('./routes/routes.js');

const app = express();
app.use(morgan("combined"));
app.use(express.urlencoded({
        extended: true
    })
);
app.use(express.json());
app.use(cors);

endpointConfig(app, '/about', endpoints.aboutRoutes);
endpointConfig(app, '/contact', endpoints.contactRoutes);
endpointConfig(app, '/ecnAccesos', endpoints.ecnAccesosRoutes)
endpointConfig(app, '/ecnProfessional', endpoints.ecnProfessionalRoutes);
endpointConfig(app, '/ecnRefuerzosBach', endpoints.ecnRefuerzosBachRoutes);
endpointConfig(app, '/ecnRefuerzosEso', endpoints.ecnRefuerzosEsoRoutes);
endpointConfig(app, '/ecnRefuerzosUni', endpoints.ecnRefuerzosUniRoutes);
endpointConfig(app, '/ecnTitulaciones', endpoints.ecnTitulacionesRoutes);
endpointConfig(app, '/ecnValenciano', endpoints.ecnValencianoRoutes);
endpointConfig(app, '/logs', endpoints.logsRoutes);
endpointConfig(app, '/news', endpoints.newsRoutes);
endpointConfig(app, '/review', endpoints.reviewRoutes);
endpointConfig(app, '/teacher', endpoints.teacherRoutes);
endpointConfig(app, '/user', endpoints.userRoutes);

app.listen(port, () => {
    console.log(server_success_msg + port);
    console.log(server_url + localhost);
});
