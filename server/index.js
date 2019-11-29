import Koa from "koa";
import koaBody from "koa-body";
import consola from "consola";
const { Nuxt, Builder } = require("nuxt");
// 引入路由(接口)
import userInterface from "./interface/user";
import cityInterface from "./interface/city";
import mysqlInterface from "./interface/mysql";
import fileInterface from "./interface/file";

const app = new Koa();

// Import and Set Nuxt.js options
const config = require("../nuxt.config.js");
config.dev = app.env !== "production";

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config);

  const {
    host = process.env.HOST || "127.0.0.1",
    port = process.env.PORT || 8888
  } = nuxt.options.server;

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }
  app.use(
    koaBody({
      multipart: true // 允许上传多个文件
    })
  );
  // 引入服务端路由
  app.use(userInterface.routes()).use(userInterface.allowedMethods());
  app.use(cityInterface.routes()).use(cityInterface.allowedMethods());
  app.use(mysqlInterface.routes()).use(mysqlInterface.allowedMethods());
  app.use(fileInterface.routes()).use(fileInterface.allowedMethods());
  app.use(ctx => {
    ctx.status = 200;
    ctx.respond = false; // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res);
  });
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}

start();
