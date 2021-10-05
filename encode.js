const encode = (data) => {
  let buff = new Buffer.from(data);
  //   console.log(buff);
  let base64data = buff.toString("base64");
  //   console.log(base64data);
  return base64data;
};

// console.log(encode("Hello Sir"));

module.exports = encode;
