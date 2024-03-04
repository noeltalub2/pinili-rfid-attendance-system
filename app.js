const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.send("Hello");
});

app.listen(PORT, () => {
	console.log(`The server is running at port ${PORT}`);
});
