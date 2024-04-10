//paquetes requeridos

const express = require("express");
const app = express();

app.set("view engine", "ejs"); //motor de plantilla "view engine"  cual motor de plantilla "ejs"

//Configurar de los archivos estaticos
app.use("/public", express.static("public"));

//Rutas GET

app.get("/login", (request, response) => {
  response.render("page/login");
});

app.get("/registrer", (request, response) => {
  response.render("page/register");
});

app.get("/profile", (request, response) => {
  response.render("page/profile");
});

const puerto = 3011;
app.listen(puerto, () => {
  console.log("Servidor ejecutandose en el puerto 3011");
});
