const decode = (data) => {
  let buff = new Buffer.from(data, "base64");
  let text = buff.toString("utf-8");
  return text;
};

module.exports = decode;
