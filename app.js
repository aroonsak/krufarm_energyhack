require("dotenv").config({ path: "../.env" });

const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const httpProxy = require("http-proxy");
const apiProxy = httpProxy.createProxyServer();

app.prepare().then(() => {
	const server = express();

	server.get("/ENV", (req, res) => {
		res.send(process.env.PRODUCTION);
	});

	server.get("/graphql", (req, res) => {
		apiProxy.web(req, res, { target: "http://localhost:4000/graphql" });
	});

	server.get("*", (req, res) => {
		return handle(req, res);
	});

	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});
