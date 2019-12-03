// 验证是否有管理权限
export default ({
  store,
  error,
  redirect,
  res,
}) => {
  const { auth } = store.state
  if (auth) {
    redirect('/')
  }
}
