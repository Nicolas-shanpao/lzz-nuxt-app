import Router from "koa-router";
import fs from "fs";
import path from "path";

const router = new Router({
  prefix: "/file"
});

router.post("/uploadFile", async (ctx, next) => {
  let file = ctx.request.files.file;
  let user_id = ctx.request.body.user_id;
  const reader = fs.createReadStream(file.path);
  // path.join()  路径拼接
  // path.resolve()  cd
  let filePath = path.resolve(__dirname, "../file/") + `/${file.name}`;
  const upStream = fs.createWriteStream(filePath);
  reader.pipe(upStream);
  let data = {
    file_path: filePath,
    file_size: file.size,
    file_name: file.name,
    file_type: file.type,
    user_id: user_id
  };
  console.log(data)

  let code, res;
  ctx.body = {
    code,
    res
  };
});

export default router;
