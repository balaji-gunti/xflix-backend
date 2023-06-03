const express = require('express');
const httpStatus = require('http-status');
const ApiError = require('./utils/ApiError');
const routes = require("./routes/v1");
const cors = require("cors");
const app = express();

// const swaggerOptions = {
//     swaggerDefinition: {
//         openapi: "3.0.0",
//         info: {
//             version: "1.0.0",
//             title: "XFLIX",
//             description: "Video streaming application",
//             contact: {
//                 name: "Crio.do",
//                 url: "https://www.crio.do/",
//                 email: "jsdoc@criodo.com",
//             },
//             servers: [{
//                 url: "http://localhost:8082",
//                 description: "Development server"
//             }]
//         }
//     },
//     apis: ['./routes/*.js']
// };

// const swaggerSpec = swaggerJsDoc(swaggerOptions);
// const options = { explorer: true };
// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec, options)); 

app.use(express.json());

app.use(cors());
app.options('*', cors());

app.use(express.urlencoded({ extended: true }));

app.use("/v1", routes);

app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, "Not Found"));
})

// app.use(errorConverter);

// app.use(errorHandler);

module.exports = app;