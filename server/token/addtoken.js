import jwt from "jsonwebtoken";
const serect = "lzz_users"; //密钥，不能丢
module.exports = userinfo => {
  //创建token并导出
  const token = jwt.sign(
    {
      id: userinfo.id
    },
    serect,
    { expiresIn: "1h" }
  );
  return token;
};
