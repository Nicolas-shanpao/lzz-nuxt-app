import jwt from "jsonwebtoken";
const serect = "lzz_users"; //密钥，不能丢
module.exports = tokens => {
  if (tokens) {
    // 解析
    let decoded = jwt.decode(tokens, serect);
    return decoded;
  }
};
