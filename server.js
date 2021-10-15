const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.json());


app.get("/api/persoon3", (req, res) => {
    res.send("Thanksss this is person 3");
})


app.listen(PORT, () => {
    console.log("server is listening on port: ", PORT);
})