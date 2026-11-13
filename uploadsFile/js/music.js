/*by Zekalryn*/

var ap = new APlayer({
  element: document.getElementById('aplayer'),         // Optional, player element
  narrow: false,         // Optional, narrow style
  autoplay: false,              // Optional, autoplay song(s), not supported by mobile browsers
  showlrc: 0,     // Optional, show lrc, can be 0, 1, 2, see: ###With lrc
  mutex: false,                 // Optional, pause other players when this player playing
  theme: '#e6d0b2',          // Optional, theme color, default: #b7daff
  /*  播放模式配置：
     'list'   -> 列表循环（播完最后一首回到第一首）
     'random' -> 随机播放
     'single' -> 单曲循环
     'order'  -> 顺序播放（播完最后一首就停止，不循环）
     注意：千万不要写 'circulation'，源码根本不认，写了会导致按钮消失且无法切歌！*/
  order: 'list',
  preload: 'none',               // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
  listmaxheight: '256px',      // Optional, max height of play list
  fixed: true,
  music: [{
    title: 'えれくとりっく',
    author: '初音ミク/ヤスオP',
    url: 'https://s3.ustatik.com/audio.com.audio/source/75/77/1881718655677775-1881718655727020.mp3?response-content-disposition=attachment%3B%20filename%3D%22001.mp3%22&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=F0E8U41NBMMW3Y027UTJ%2F20261113%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20261113T051243Z&X-Amz-SignedHeaders=host&X-Amz-Expires=518400&X-Amz-Signature=d1faad93641aed2fa1e608e0994ce0344e5e81184ea03793add0c00746a5cd06',
    cover: 'https://audio.com/s3w/audio.com.static/audio/image/75/77/1881718655677775-1881718682350959.jpeg@256?qlt=75&fmt=webp',
  }, {
    title: '扑克摇I\'m So Hot7V',
    author: '阿吉野马',
    url: 'https://s3.ustatik.com/audio.com.audio/source/29/90/1881719172219029-1881719172261118.mp3?response-content-disposition=attachment%3B%20filename%3D%22002.mp3%22&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=F0E8U41NBMMW3Y027UTJ%2F20261113%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20261113T052059Z&X-Amz-SignedHeaders=host&X-Amz-Expires=518400&X-Amz-Signature=d6df04f9a1c5eae6d76e66f1755e571999bed71888b568df6e378862461a9cea',
    cover: 'https://audio.com/s3w/audio.com.static/audio/image/29/90/1881719172219029-1881719182320380.jpeg@256?qlt=75&fmt=webp',
  },  {
    title: 'Conqueror',
    author: 'IA',
    url: 'https://s3.ustatik.com/audio.com.audio/source/44/56/1881719617315644-1881719617356098.mp3?response-content-disposition=attachment%3B%20filename%3D%22008.mp3%22&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=F0E8U41NBMMW3Y027UTJ%2F20261113%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20261113T052759Z&X-Amz-SignedHeaders=host&X-Amz-Expires=518400&X-Amz-Signature=6792722fffcd675c341cf86d9fdc40c7a198c26fd7c6736b3e4c8b33620666c7',
    cover: 'https://audio.com/s3w/audio.com.static/audio/image/44/56/1881719617315644-1881719627664886.jpeg@256?qlt=75&fmt=webp',
  },{
    title: '霓虹甜心',
    author: '早稻叽',
    url: 'https://s3.ustatik.com/audio.com.audio/source/13/58/1881719446115813-1881719446161802.mp3?response-content-disposition=attachment%3B%20filename%3D%22006.mp3%22&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=F0E8U41NBMMW3Y027UTJ%2F20261113%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20261113T052541Z&X-Amz-SignedHeaders=host&X-Amz-Expires=518400&X-Amz-Signature=4ba760fb59e042b061d9aea4ceb374c66da6902b715ac561c9c3a4c06c9bb93a',
    cover: 'https://audio.com/s3w/audio.com.static/audio/image/13/58/1881719446115813-1881719452070605.jpeg@256?qlt=75&fmt=webp',
  }, {
    title: 'Gimme×Gimme',
    author: '初音ミク / 鏡音リン',
    url: 'https://s3.ustatik.com/audio.com.audio/source/68/09/1881719260360968-1881719260401108.mp3?response-content-disposition=attachment%3B%20filename%3D%22003.mp3%22&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=F0E8U41NBMMW3Y027UTJ%2F20261113%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20261113T052243Z&X-Amz-SignedHeaders=host&X-Amz-Expires=518400&X-Amz-Signature=57a25f458c9dd13b1b02c864b516391b70a648f03cce55e0ca283801bffe8e08',
    cover: 'https://audio.com/s3w/audio.com.static/audio/image/68/09/1881719260360968-1881719270585351.jpeg@256?qlt=75&fmt=webp',
  },{
    title: '你不配',
    author: '苏星婕',
    url: 'https://s3.ustatik.com/audio.com.audio/source/15/68/1881719680726815-1881719680765507.mp3?response-content-disposition=attachment%3B%20filename%3D%22009.mp3%22&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=F0E8U41NBMMW3Y027UTJ%2F20261113%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20261113T052933Z&X-Amz-SignedHeaders=host&X-Amz-Expires=518400&X-Amz-Signature=25b8e812632c90723154b039283f45741e96d5bf3af97fea23715fc606387c28',
    cover: 'https://audio.com/s3w/audio.com.static/audio/image/15/68/1881719680726815-1881719692547930.jpeg@256?qlt=75&fmt=webp',
  }, {
    title: '把回忆拼好给你',
    author: '苏星婕',
    url: 'https://s3.ustatik.com/audio.com.audio/source/53/87/1881719330018753-1881719330058941.mp3?response-content-disposition=attachment%3B%20filename%3D%22004.mp3%22&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=F0E8U41NBMMW3Y027UTJ%2F20261113%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20261113T052326Z&X-Amz-SignedHeaders=host&X-Amz-Expires=518400&X-Amz-Signature=23cfff155b27379c7d3fb9dce050792951ebb1355ad96b730f8b5f7843fbb32f',
    cover: 'https://audio.com/s3w/audio.com.static/audio/image/53/87/1881719330018753-1881719337045518.jpeg@256?qlt=75&fmt=webp',
  }, {
    title: '娃娃脸（名井南进行曲）',
    author: '后弦',
    url: 'https://s3.ustatik.com/audio.com.audio/source/24/76/1881719387037624-1881719387084140.mp3?response-content-disposition=attachment%3B%20filename%3D%22005.mp3%22&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=F0E8U41NBMMW3Y027UTJ%2F20261113%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20261113T052421Z&X-Amz-SignedHeaders=host&X-Amz-Expires=518400&X-Amz-Signature=9f3da3e2b8cc20a2884efd2cd9943a6e8919334e1f3f19a589cf785a25a5fdfe',
    cover: 'https://audio.com/s3w/audio.com.static/audio/image/24/76/1881719387037624-1881719392644507.jpeg@256?qlt=75&fmt=webp',
  }, {
    title: '黑色毛衣',
    author: '小柔',
    url: 'https://s3.ustatik.com/audio.com.audio/source/87/22/1881719502532287-1881719502578700.mp3?response-content-disposition=attachment%3B%20filename%3D%22007.mp3%22&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=F0E8U41NBMMW3Y027UTJ%2F20261113%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20261113T052606Z&X-Amz-SignedHeaders=host&X-Amz-Expires=518400&X-Amz-Signature=8f3b2df3190e703c1dd2ba6eb6fc25f0e24f2f43c155c71be8051dc291f079b9',
    cover: 'https://audio.com/s3w/audio.com.static/audio/image/87/22/1881719502532287-1881719508667706.jpeg@256?qlt=75&fmt=webp',
  }, ]
});


// ==== Media Session API 锁屏与通知栏接管 (防连点优化版) ====
if ('mediaSession' in navigator && typeof ap !== 'undefined') {
  const ms = navigator.mediaSession;
  const audio = ap.audio;
  let updateTimer = null; // 用于防抖的定时器
  let currentTrackName = ''; // 记录当前歌曲名，防止重复渲染

  // 更新元数据
  const updateMeta = () => {
    // 如果已经有定时器，先清除，保证连续点击时只执行最后一次
    if (updateTimer) clearTimeout(updateTimer);

    updateTimer = setTimeout(() => {
      const track = ap.list.audios[ap.list.index];
      if (!track || track.name === currentTrackName) return;

      // 记录当前切换的歌曲，防止重复刷新
      currentTrackName = track.name;

      // 处理网易云封面：强制 HTTPS，并尝试把尺寸改大
      let coverUrl = track.cover || '';
      if (coverUrl.startsWith('http://')) {
        coverUrl = coverUrl.replace('http://', 'https://');
      }
      if (coverUrl.includes('?param=')) {
        coverUrl = coverUrl.replace(/\?param=\d+y\d+/, '?param=512y512');
      }

      ms.metadata = new MediaMetadata({
        title: track.name || '未知歌曲',
        artist: track.artist || 'Zekalryn',
        album: track.album || 'Zekalryn\'s Blog',
        artwork: [
          { src: coverUrl, sizes: '512x512', type: 'image/png' }
        ]
      });
    }, 300); // 延迟 300 毫秒执行，等 AP 的状态稳定下来
  };

  // 绑定锁屏硬件按键
  ms.setActionHandler('play', () => ap.play());
  ms.setActionHandler('pause', () => ap.pause());
  ms.setActionHandler('previoustrack', () => ap.skipBack());
  ms.setActionHandler('nexttrack', () => ap.skipForward());

  // 状态同步
  audio.addEventListener('play', () => ms.playbackState = 'playing');
  audio.addEventListener('pause', () => ms.playbackState = 'paused');

  // 切歌刷新（现在由 updateMeta 内部的防抖接管）
  ap.on('listswitch', () => {
    updateMeta();
    if (!audio.paused) ms.playbackState = 'playing';
  });

  // 初始化
  updateMeta();
}
