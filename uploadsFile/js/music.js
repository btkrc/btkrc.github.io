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
    url: 'http://music.163.com/song/media/outer/url?id=22677533',
    cover: 'http://p2.music.126.net/byXQIhAT-iS6xd6icx8EiA==/560750930187412.jpg?param=130y130',
  }, {
    title: '扑克摇I\'m So Hot7V',
    author: '阿吉野马',
    url: 'http://music.163.com/song/media/outer/url?id=2635226506',
    cover: 'http://p2.music.126.net/QcElt0V5fiptEKJBBqEbdQ==/109951170032150566.jpg?param=130y130',
  }, {
    title: 'Gimme×Gimme',
    author: '初音ミク / 鏡音リン',
    url: 'http://music.163.com/song/media/outer/url?id=1402830753',
    cover: 'http://p2.music.126.net/j1aWfCfPtDKjdlWa4zo8hQ==/109951164481830838.jpg?param=130y130',
  }, {
    title: '娃娃脸（名井南进行曲）',
    author: '后弦',
    url: 'http://music.163.com/song/media/outer/url?id=3342918129',
    cover: 'http://p2.music.126.net/k7jkZo2pfWZivHEf_SsvKg==/109951172641936083.jpg?param=130y130',
  }, {
    title: 'ロキ - (ROKI)',
    author: '鏡音リン/みきとP',
    url: 'http://music.163.com/song/media/outer/url?id=546724682',
    cover: 'http://p2.music.126.net/scCoTzSWV14xl_9ZGecCQA==/109951164192574921.jpg?param=130y130',
  }, {
    title: 'トルコ行進曲',
    author: '96猫',
    url: 'http://music.163.com/song/media/outer/url?id=28403160',
    cover: 'http://p1.music.126.net/vrOG0hAhslI4djtZdMgE6g==/6044015418094303.jpg?param=130y130',
  }, {
    title: '爱的魔法',
    author: '慕初音',
    url: 'http://music.163.com/song/media/outer/url?id=1318883909',
    cover: 'http://p2.music.126.net/GAPKeYnfQzYIzzH8kglbLQ==/109951163609770588.jpg?param=130y130',
  }, {
    title: 'ちるちる',
    author: 'REOL',
    url: 'http://music.163.com/song/media/outer/url?id=436016476',
    cover: 'http://p2.music.126.net/cu1sEIDxXOJm5huZ3Wjs0Q==/18833534672880379.jpg?param=130y130',
  }, {
    title: 'アシンメトリー',
    author: 'REOL',
    url: 'http://music.163.com/song/media/outer/url?id=28941716',
    cover: 'http://p1.music.126.net/cZPx3peGTuWEI_GaZB5CDg==/8892850045794893.jpg?param=130y130',
  }, {
    title: 'ふわふわ♪',
    author: '樹莓蛋奶酥',
    url: 'http://music.163.com/song/media/outer/url?id=440767322',
    cover: 'http://p1.music.126.net/9Tp9wWekfaBSimmba6ftLA==/109951165599339491.jpg?param=130y130',
  }, {
    title: '起风了',
    author: '买辣椒也用券',
    url: 'http://music.163.com/song/media/outer/url?id=1330348068',
    cover: 'http://p2.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg?param=130y130',
  }, {
    title: '让风告诉你 (日文版)',
    author: 'Hanser / 泠鸢yousa',
    url: 'http://music.163.com/song/media/outer/url?id=1831504253',
    cover: 'http://p2.music.126.net/pfnSmGMFMNcsCMOua6DMTw==/109951165825771311.jpg?param=130y130',
  }, {
    title: '【取经计划·原创】新·九九八十一（官方优化版）',
    author: '泠鸢yousa',
    url: 'http://music.163.com/song/media/outer/url?id=498942717',
    cover: 'http://p2.music.126.net/k8Fxa118GP34K0VTGKWaDg==/109951163003648209.jpg?param=130y130',
  }, {
    title: '空山新雨后',
    author: '音阙诗听 / 锦零',
    url: 'http://music.163.com/song/media/outer/url?id=1352002513',
    cover: 'http://p2.music.126.net/-Ox3azW3BpHMpwyXrzqzsw==/109951163927362248.jpg?param=130y130',
  }, {
    title: '怪物',
    author: '多多poi / Hanser',
    url: 'http://music.163.com/song/media/outer/url?id=1854902495',
    cover: 'http://p1.music.126.net/GDxBDUX9OGoyxe2KRiV93A==/109951166105612973.jpg?param=130y130',
  }, {
    title: '「南北组-世末歌者」',
    author: '乐正绫 / 洛天依Official / COP',
    url: 'http://music.163.com/song/media/outer/url?id=429460240',
    cover: 'http://p1.music.126.net/sZGaAxUHHhuhQ1Zxa2jw4g==/17790098137764958.jpg?param=130y130',
  }, {
    title: 'カサネテク',
    author: 'Sakanya',
    url: 'http://music.163.com/song/media/outer/url?id=1490050203',
    cover: 'http://p2.music.126.net/jH2eR2gKvW5oDCe56UPVhA==/109951165415325309.jpg?param=130y130',
  }, {
    title: '深海少女',
    author: '初音ミク',
    url: 'http://music.163.com/song/media/outer/url?id=31140699',
    cover: 'http://p2.music.126.net/8jr6ElaxvntFk8LkKM4j2A==/7880199836870994.jpg?param=130y130',
  }, {
    title: '花月成双',
    author: '泠鸢yousa / 朽木素 / 魂喵喵',
    url: 'http://music.163.com/song/media/outer/url?id=1838510557',
    cover: 'http://p1.music.126.net/LhYYzZT-V_n4eNDNsOu0GQ==/109951165696869592.jpg?param=130y130',
  }, {
    title: '永夜のパレード',
    author: 'ケーキ姫☆優海 / JUMA',
    url: 'http://music.163.com/song/media/outer/url?id=692193',
    cover: 'http://p1.music.126.net/_0EPPAiKLQqddTZ5eKSqBw==/109951163136011717.jpg?param=130y130',
  }, {
    title: 'tutu',
    author: '鎖那',
    url: 'http://music.163.com/song/media/outer/url?id=1854628391',
    cover: 'http://p2.music.126.net/vQQham0ok6MLeY2GRIQNLA==/109951166101594087.jpg?param=130y130',
  }, {
    title: '约会宣言',
    author: 'iKz / Hanser',
    url: 'http://music.163.com/song/media/outer/url?id=1358213099',
    cover: 'http://p2.music.126.net/25XBZMlTz8bZBq6N54ei4g==/109951163891882131.jpg?param=130y130',
  }, {
    title: '勾指起誓',
    author: '泠鸢yousa',
    url: 'http://music.163.com/song/media/outer/url?id=1350160463',
    cover: 'http://p1.music.126.net/fxI_iAsaRU9M5ZGE-Pu7iw==/109951164479032071.jpg?param=130y130',
  }, {
    title: '【洛天依】影子小姐',
    author: '著小生zoki / 洛天依',
    url: 'http://music.163.com/song/media/outer/url?id=1298762936',
    cover: 'http://p1.music.126.net/xJmb740nKXk8paKRHg7Yqg==/109951163440366031.jpg?param=130y130',
  }, {
    title: '化身星海',
    author: '中国绊爱',
    url: 'http://music.163.com/song/media/outer/url?id=1458786291',
    cover: 'http://p2.music.126.net/vBe87gzZIypoBIfr1Vh3eA==/109951165096412870.jpg?param=130y130',
  },]
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
