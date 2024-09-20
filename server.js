const express = require("express");
require("dotenv").config();
const Connect = require("./config/db/Database");
const audit = require("./routes/auditlog");
const categori = require("./routes/categories");
Connect();

const app = express();
app.use(express.json());

app.use("/categori", categori);
app.use("/auditlog", audit);


app.listen(3000, () => {
    console.log("server başladı");
})