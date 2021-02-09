/*
文件     :myUtils.js
时间     :2021-02-10 07:00:36
作者     :btKrc1nx
*/


/**添加网页运行时间 */

function myGetRuntime(d) {
  const dateNow = new Date()
  const datePost = new Date(d)
  const dateDiff = dateNow.getTime() - datePost.getTime()
  const minute = 1000 * 60
  const hour = minute * 60
  const day = hour * 24

  let result = {}

  const dayCount = Math.floor(dateDiff / day)
  const hourCount = Math.floor(dateDiff % day / hour)
  const minuteCount = Math.floor(dateDiff % day % hour / minute)
  /**最后余下的为毫秒数 除以1000得到秒数 */
  const secondCount = Math.floor(dateDiff % day % hour % minute / 1000)

  result.day = dayCount
  result.hour = hourCount
  result.minute = minuteCount
  result.second = secondCount

  return result
}

(function () {
  const $runtimeCount = document.getElementById('runtimeshow')
  if ($runtimeCount) {
    const publishDate = $runtimeCount.getAttribute('data-publishDate')
    setInterval(function () {
      const runtimeDate = myGetRuntime(publishDate)
      $runtimeCount.innerText = '本站已运行 ' + runtimeDate.day + '天' + runtimeDate.hour + '小时' + runtimeDate.minute + '分钟' + runtimeDate.second + '秒'
    }, 1000)

  }
})()