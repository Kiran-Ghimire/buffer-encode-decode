const express = require("express");
const encode = require("./encode");
const decode = require("./decode");

const app = express();

app.get("/", (req, res) => {
  const encodeData = "Hello Sir";
  const decodeData = "SGVsbG8gU2ly";

  const encodeDecode = {
    encoding: `"${encodeData}" is encoded to ${encode(encodeData)}`,
    decoding: `"${decodeData}" is decoded to ${decode(decodeData)}`,
  };
  res.send(encodeDecode);
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});
