var ap = new APlayer({
  element: document.getElementById('aplayer'),         // Optional, player element
  narrow: false,         // Optional, narrow style
  autoplay: false,              // Optional, autoplay song(s), not supported by mobile browsers
  showlrc: 0,     // Optional, show lrc, can be 0, 1, 2, see: ###With lrc
  mutex: false,                 // Optional, pause other players when this player playing
  theme: '#e6d0b2',          // Optional, theme color, default: #b7daff
  order: 'random',      // Optional, play mode, can be `random` `single` `circulation`(loop) `order`(no loop), default: `circulation`
  preload: 'metadata',               // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
  listmaxheight: '513px',      // Optional, max height of play list
  fixed: true,
  music: [{
    title: '影子小姐',
    author: '洛天依',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E3%80%90%E6%B4%9B%E5%A4%A9%E4%BE%9D%E3%80%91%E5%BD%B1%E5%AD%90%E5%B0%8F%E5%A7%90.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: '不必记得',
    author: '爱哥',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E4%B8%8D%E5%BF%85%E8%AE%B0%E5%BE%97%20-%20(%E6%89%8B%E6%B8%B8%E3%80%8A%E9%BB%91%E6%BD%AE%E6%A1%99%E4%B9%8B%E4%B8%8A%E3%80%8B%E4%B8%BB%E9%A2%98%E6%9B%B2%E4%B8%AD%E6%96%87%E7%89%88).m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: '万分之一的光',
    author: '洛天依',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E4%B8%87%E5%88%86%E4%B9%8B%E4%B8%80%E7%9A%84%E5%85%89.mp3',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: '蒸汽冲击',
    author: '蒸汽波',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E7%9C%9F%E6%B0%94%E5%86%B2%E5%87%BB.mp3',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: '努力婊(hardworking bitch)',
    author: 'hanser',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E5%8A%AA%E5%8A%9B%E5%A9%8A(hardworking%20bitch).mp3',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: '神的随波逐流',
    author: '冷鸟',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E7%A5%9E%E7%9A%84%E9%9A%8F%E6%B3%A2%E9%80%90%E6%B5%81.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: '勾指起誓',
    author: '冷鸟',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E5%8B%BE%E6%8C%87%E8%B5%B7%E8%AA%93.mp3',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: '单向地铁',
    author: '小野道ono / karin',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E5%8D%95%E5%90%91%E5%9C%B0%E9%93%81.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: '夢の続き~DreamsOfLight',
    author: 'Night Tempo',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E5%A4%A2%E3%81%AE%E7%B6%9A%E3%81%8D~DreamsOfLight.mp3',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: '恋爱吧魔法少女',
    author: 'hanser',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E6%81%8B%E7%88%B1%E5%90%A7%E9%AD%94%E6%B3%95%E5%B0%91%E5%A5%B3.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: '打上花火',
    author: 'DAOKO / 米津玄师',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E6%89%93%E4%B8%8A%E8%8A%B1%E7%81%AB.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: '红昭愿',
    author: '音阙诗听',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E7%BA%A2%E6%98%AD%E6%84%BF.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: '花海',
    author: '周杰伦',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E8%8A%B1%E6%B5%B7.mp3',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: 'summertime',
    author: 'hanser',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/summertime.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: '约会誓言',
    author: 'hanser',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E7%BA%A6%E4%BC%9A%E8%AA%93%E8%A8%80.mp3',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: '1001夜',
    author: 'hanser',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/1001%E5%A4%9C.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: 'Suki Daccha',
    author: 'ミカヅキ BIGWAVE',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/Suki%20Daccha.mp3',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: '钢铁直男',
    author: 'hanser',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E9%92%A2%E9%93%81%E7%9B%B4%E7%94%B7.mp3',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: '【取经计划·原创】新·九九八十一',
    author: '冷鸟',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E3%80%90%E5%8F%96%E7%BB%8F%E8%AE%A1%E5%88%92%C2%B7%E5%8E%9F%E5%88%9B%E3%80%91%E6%96%B0%C2%B7%E4%B9%9D%E4%B9%9D%E5%85%AB%E5%8D%81%E4%B8%80.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: 'アイロニ',
    author: '鹿乃',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E3%82%A2%E3%82%A4%E3%83%AD%E3%83%8B.mp3',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: 'インドア系ならトラックメイカー',
    author: 'Yunomi',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E3%82%A4%E3%83%B3%E3%83%88%E3%82%99%E3%82%A2%E7%B3%BB%E3%81%AA%E3%82%89%E3%83%88%E3%83%A9%E3%83%83%E3%82%AF%E3%83%A1%E3%82%A4%E3%82%AB%E3%83%BC.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: '芒种',
    author: '音阙诗听',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E8%8A%92%E7%A7%8D.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: '告白(Acoustic)',
    author: '冷鸟',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E5%91%8A%E7%99%BD(Acoustic).m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: '恋爱语音导航',
    author: '冷鸟',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E6%81%8B%E7%88%B1%E8%AF%AD%E9%9F%B3%E5%AF%BC%E8%88%AA.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: '我的一个道姑朋友',
    author: '双笙',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E6%88%91%E7%9A%84%E4%B8%80%E4%B8%AA%E9%81%93%E5%A7%91%E6%9C%8B%E5%8F%8B.mp3',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: '末世歌者',
    author: '洛天依',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E6%9C%AB%E4%B8%96%E6%AD%8C%E8%80%85.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: '立冬',
    author: '音阙诗听',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E7%AB%8B%E5%86%AC.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: '癒し イヤラシ☆これって何ナニ',
    author: '伊ヶ崎綾香',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E7%99%92%E3%81%97%20%E3%82%A4%E3%83%A4%E3%83%A9%E3%82%B7%E2%98%86%E3%81%93%E3%82%8C%E3%81%A3%E3%81%A6%E4%BD%95%E3%83%8A%E3%83%8B.mp3',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: 'ForGotten Sorrow',
    author: 'Yozoh',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/ForGotten%20Sorrow.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: '彼女は旅に出る',
    author: '鎖那',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E5%BD%BC%E5%A5%B3%E3%81%AF%E6%97%85%E3%81%AB%E5%87%BA%E3%82%8B.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: 'Miku',
    author: '初音ミク',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/Miku.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: '今夜的风',
    author: '程响',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E4%BB%8A%E5%A4%9C%E7%9A%84%E9%A3%8E.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  }, {
    title: 'Deep Blue Townへおいでよ',
    author: '内田真礼',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/Deep%20Blue%20Town%E3%81%B8%E3%81%8A%E3%81%84%E3%81%A7%E3%82%88%20.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  },{
    title: '化身星海',
    author: '爱哥',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E5%8C%96%E8%BA%AB%E6%98%9F%E6%B5%B7.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  },{
    title: '緋色月下、狂咲ノ絶',
    author: '',
    url: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource2@main/music/%E7%B7%8B%E8%89%B2%E6%9C%88%E4%B8%8B%E3%80%81%E7%8B%82%E5%92%B2%E3%83%8E%E7%B5%B6.m4a',
    pic: 'https://cdn.jsdelivr.net/gh/btKrc1nx/resource@main/20201130184505.png',
  },]
});