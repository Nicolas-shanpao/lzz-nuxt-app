import mysql from "mysql";

const config = {
  // 数据库配置
  database: {
    DATABASE: "lzztest",
    USERNAME: "liazz",
    PASSWORD: "ACElzz2018",
    PORT: "3306",
    HOST: "119.23.67.3"
  }
};
let pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
});
export default pool;
