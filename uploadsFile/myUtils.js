(function () {
  const $runtimeCount = document.getElementById('runtimeshow')
  if ($runtimeCount) {
    const publishDate = $runtimeCount.getAttribute('data-publishDate')
    $runtimeCount.innerText = '本站已运行 ' + btf.diffDate(publishDate) + ' ' + GLOBAL_CONFIG.runtime
  }
})()