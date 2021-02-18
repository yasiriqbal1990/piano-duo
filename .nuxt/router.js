import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _25fb9df6 = () => interopDefault(import('..\\pages\\aufnahmen.vue' /* webpackChunkName: "pages/aufnahmen" */))
const _644b8afb = () => interopDefault(import('..\\pages\\aufReisen.vue' /* webpackChunkName: "pages/aufReisen" */))
const _e6495e3a = () => interopDefault(import('..\\pages\\aufreisensingle.vue' /* webpackChunkName: "pages/aufreisensingle" */))
const _93203042 = () => interopDefault(import('..\\pages\\kalender.vue' /* webpackChunkName: "pages/kalender" */))
const _576540fa = () => interopDefault(import('..\\pages\\kontakt.vue' /* webpackChunkName: "pages/kontakt" */))
const _295a1bb6 = () => interopDefault(import('..\\pages\\konzertname.vue' /* webpackChunkName: "pages/konzertname" */))
const _7cc7aa8f = () => interopDefault(import('..\\pages\\stagestaff.vue' /* webpackChunkName: "pages/stagestaff" */))
const _16c62758 = () => interopDefault(import('..\\pages\\stimmen.vue' /* webpackChunkName: "pages/stimmen" */))
const _5f6a56f5 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/aufnahmen",
    component: _25fb9df6,
    name: "aufnahmen"
  }, {
    path: "/aufReisen",
    component: _644b8afb,
    name: "aufReisen"
  }, {
    path: "/aufreisensingle",
    component: _e6495e3a,
    name: "aufreisensingle"
  }, {
    path: "/kalender",
    component: _93203042,
    name: "kalender"
  }, {
    path: "/kontakt",
    component: _576540fa,
    name: "kontakt"
  }, {
    path: "/konzertname",
    component: _295a1bb6,
    name: "konzertname"
  }, {
    path: "/stagestaff",
    component: _7cc7aa8f,
    name: "stagestaff"
  }, {
    path: "/stimmen",
    component: _16c62758,
    name: "stimmen"
  }, {
    path: "/",
    component: _5f6a56f5,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
