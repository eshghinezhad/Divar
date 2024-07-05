const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
function SwaggerConfig(app) {
  const swaggerDocument = swaggerJsDoc({
    swaggerDefinition: {
      openapi: "3.0.1",
      info: {
        title: "divar-backend",
        description: "backend ",
        version: "1.0.0"
      },
    },
    apis: [process.cwd()  + "/src/modules/**/*.swagger.js"],
   });
  const Swagger = swaggerUi.setup(swaggerDocument,{});
  app.use("/", swaggerUi.serve,Swagger);
};
module.exports = SwaggerConfig;
