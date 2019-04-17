/**
 * Created by sunlf on 2017/7/21.
 * 封装消息显示
 */
import {Message} from 'element-ui'

export default {
  message(_type, _msg, _showClose = true, _duration = 3000) {
    let options = _type
    if (typeof _type !== 'object') {
      options = {
        type: _type,
        showClose: _showClose | true,
        message: _msg,
        duration: _duration,
        customClass: 'kalix-message'
      }
    }
    Message(options)
  },
  success: function (_msg, _showClose, _duration = 3000) {
    this.message('success', _msg, _showClose | true, _duration)
  },
  warning: function (_msg, _showClose, _duration = 3000) {
    this.message('warning', _msg, _showClose | true, _duration)
  },
  error: function (_msg, _showClose, _duration = 3000) {
    this.message('error', _msg, _showClose | true, _duration)
  },
  info: function (_msg, _showClose, _duration = 3000) {
    this.message('info', _msg, _showClose | true, _duration)
  },
  processResult: function (res, _showClose = true, _duration = 3000) { // 处理返回结果
    if (res.data.success) {
      this.success(res.data.msg, _showClose, _duration)
    } else {
      this.error(res.data.msg, _showClose, _duration)
    }
  }
}
