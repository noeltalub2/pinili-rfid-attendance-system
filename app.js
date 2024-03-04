const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.get("/signin", (req, res) => {
	res.render("signin");
});

app.get("/dashboard", (req, res) => {
	res.render("dashboard");
});

app.get("/employee", (req, res) => {
	res.render("employee");
});

app.listen(PORT, () => {
	console.log(`The server is running at port ${PORT}`);
});
