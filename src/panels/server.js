const mod = ({express,ap,server}) =>(
const express = require("express");
const ap = express();

ap.set("view engine", "ejs");
ap.use(express.static("public"));

ap.get('/', (req,res) =>{
	res.render('index')
})
server = ap.listen("3000", () =>console.log("Сервер запущен"));

);


export default mod;