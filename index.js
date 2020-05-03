require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 5000;

const app = express();

// Setup for Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Setup for static pages
app.use(express.static(path.join(__dirname, "public")));
if (process.env.NODE_ENV === "production") {
	// Exprees will serve up production assets
	app.use(express.static("client/build"));
}

// Temporary connection between front-end and back-end
app.get("/express_backend", (req, res) => {
	res.send({ express: "Backend Connected" });
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
