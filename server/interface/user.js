import Router from "koa-router";
import sql from "../mysql/controller";
import addtoken from "../token/addtoken";
import proving from "../token/proving";
const router = new Router({
  prefix: "/user"
});

router.post("/login", async ctx => {
  const data = {
    username: ctx.request.body.username,
    password: ctx.request.body.password
  };
  let res, msg, code, token;
  try {
    res = await sql.userLogin(data);
    if (res.length == 0) {
      code = 0;
      msg = "用户不存在";
    } else {
      let tk = addtoken({ id: res[0].id });
      code = 200;
      msg = "登录成功";
      token = tk;
    }
  } catch (e) {
    console.log(e);
  }
  ctx.body = {
    code: code,
    data: { token },
    msg: msg
  };
});
router.post("/userinfo", async ctx => {
  let token = ctx.request.header.authorization;
  console.log(token);
  let res, userinfo, code, msg;
  if (token) {
    let check = proving(token);
    if (check) {
      if (check.exp <= new Date() / 1000) {
        msg = "token过期";
        code = 400001;
      } else {
        try {
          res = await sql.userInfo(check);
          if (res.length > 0) {
            code = 200;
            userinfo = {
              id: res[0].id,
              username: res[0].username,
              roles: res[0].roles,
              age: res[0].age,
              avatar: res[0].avatar,
              phone: res[0].phone
            };
            msg = "操作成功";
          } else {
            code = 400;
            msg = "用户信息不存在";
          }
        } catch (e) {
          console.log(e);
        }
      }
    } else {
      code = 400;
      msg = "token解析失败，请重新登录";
    }
  } else {
    code = 400;
    msg = "没有token";
  }
  ctx.body = {
    code: code,
    data: { userinfo },
    msg: msg
  };
});
export default router;
