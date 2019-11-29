import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d5a2c074 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _d8b09f82 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages_search" */))
const _f6ae9932 = () => interopDefault(import('..\\pages\\mysql\\createTable.vue' /* webpackChunkName: "pages_mysql_createTable" */))
const _3ae38d97 = () => interopDefault(import('..\\pages\\mysql\\mysql.vue' /* webpackChunkName: "pages_mysql_mysql" */))
const _3a886c1d = () => interopDefault(import('..\\pages\\mysql\\showTables.vue' /* webpackChunkName: "pages_mysql_showTables" */))
const _36d0e835 = () => interopDefault(import('..\\pages\\upload\\uploadFile.vue' /* webpackChunkName: "pages_upload_uploadFile" */))
const _96330aea = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _d5a2c074,
    name: "about"
  }, {
    path: "/search",
    component: _d8b09f82,
    name: "search"
  }, {
    path: "/mysql/createTable",
    component: _f6ae9932,
    name: "mysql-createTable"
  }, {
    path: "/mysql/mysql",
    component: _3ae38d97,
    name: "mysql-mysql"
  }, {
    path: "/mysql/showTables",
    component: _3a886c1d,
    name: "mysql-showTables"
  }, {
    path: "/upload/uploadFile",
    component: _36d0e835,
    name: "upload-uploadFile"
  }, {
    path: "/",
    component: _96330aea,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
