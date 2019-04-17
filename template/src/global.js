/**
 * Created by Administrator on 2018/6/4.
 */

import GlobalConfig from './config/global.toml'

const lib = {
  install: function (Vue, opts) {
    Vue.prototype.$KalixGlobalConfig = GlobalConfig
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(lib)
}
export default lib
