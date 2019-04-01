import Vue, { VNode } from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => lazyLoadView(import('@/views/home.vue')),
    },
    {
      path: '/404',
      name: '404',
      component: () => lazyLoadView(import('@/views/_404.vue')),
    },
    {
      path: '*',
      redirect: '404',
    },
  ],
})

function lazyLoadView(AsyncView: Promise<object>): Promise<object> {
  const AsyncHandler = () => ({
    component: AsyncView,
    // A component to use while the component is loading.
    // eslint-disable-next-line global-require
    loading: require('@/views/_loading.vue').default,
    // Delay before showing the loading component.
    // Default: 200 (milliseconds).
    delay: 200,
    // A fallback component in case the timeout is exceeded
    // when loading the component.
    // eslint-disable-next-line global-require
    error: require('@/views/_timeout.vue').default,
    // Time before giving up trying to load the component.
    // Default: Infinity (milliseconds).
    timeout: 10000,
  })

  return Promise.resolve({
    functional: true,
    render(h: Function, { data, children }: { data: object; children: VNode[] }) {
      return h(AsyncHandler, data, children)
    },
  })
}
