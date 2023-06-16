
const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");
const cors = require("cors");

const port = 4500;

const app = express(); 
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cors())

app.use(morgan("combined"));

routes(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});

/*
http://localhost:4500/

https://www.youtube.com/watch?v=fPuLnzSjPLE
17:50
*/
