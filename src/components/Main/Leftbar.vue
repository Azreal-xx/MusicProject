<template>
  <div class="left">
    <div class="controls">
      <div class="close"></div>
      <div class="minimize"></div>
      <div class="maximize"></div>
    </div>
    <div class="menu">
      <div class="title">发现音乐</div>
          <div class="item" @click="toMain()">
            <i class="material-icons">layers</i>
            <span>主页</span>
          </div>
          <div class="item">
            <i class="material-icons">search</i>
            <span>视频</span>
          </div>
          <div class="item">
            <i class="material-icons">radio</i>
            <span>朋友</span>
          </div>
          <div class="item">
            <i class="material-icons">mic</i>
            <span>直播</span>
          </div>
          <div class="item">
            <i class="material-icons">album</i>
            <span>私人FM</span>
          </div>
    </div>
    <div class="playlists">
      <div class="title">创建歌单</div>
          <div class="item" @click="showLovesong()">
            <i class="material-icons">list</i>
            <span class="overflow-ellipsis">我喜欢的音乐</span>
          </div>
          <ul class="songlist-ul" :style="{ height: isShow.height + 'px' }">
            <li @click="toSonglist(list.id)" class="hover:bg-gray-200 hover:bg-opacity-30 focus:outline-none py-0.4 px-1.5 rounded cursor-pointer select-none" 
            :class="{ itemshow: itemshow === list.id ? true : false }" 
            v-for="(list, index) in Userlist" :key="index" >
              {{ list.name }}
            </li>
          </ul>

          <div class="item" @click="showClosong()">
            <i class="material-icons">list</i>
            <span>收藏歌单</span>
          </div>
          <ul class="songlist-ul" :style="{ height: isSehow.height + 'px' }">
            <li @click="toSonglist(list.id)" class="hover:bg-gray-200 hover:bg-opacity-30 focus:outline-none py-0.4 px-1.5 rounded cursor-pointer select-none" 
            :class="{ itemshow: itemshow === list.id ? true : false }" 
            v-for="(list, index) in Clotlist" :key="index" >
              {{ list.name }}
            </li>
          </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Leftbar",
  data() {
    return {
      isShow: {
        height: "0"
      },
      isSehow: {
        height: "0"
      },
      Userlist: [],
      Clotlist: [],
      UserlistCount: 0,
      ClotlistCount: 0,
      itemshow: 0
    }
  },
  created() {
    const { id, cookie } = this.$root
    const _this  = this
    // 获取用户收藏的歌单
    axios.get("https://cheshire-api.vercel.app/api/wyusersonglist", { params: {
      id,
      cookie
    } })
    .then(function(response) {
      _this.saveSonglistInfo(response.data.playlist)
    })
    .catch(function(err) {
      console.log(err)
    })
  },
  methods: {
    showLovesong() {
      if(this.isShow.height !== "0") {
        this.isShow.height = "0"
      } else {
        this.isShow.height = 36 * this.UserlistCount + ""
      }
    },
    showClosong() {
      if(this.isSehow.height !== "0") {
        this.isSehow.height = "0"
      } else {
        this.isSehow.height = 36 * this.ClotlistCount + ""
      }
    },
    // 保存登录用户的歌单信息
    saveSonglistInfo(data) {
      for(var index of data) {
        if(index.creator.userId === parseInt(this.$root.id)) {
          this.Userlist.push(index)
        } else {
          this.Clotlist.push(index)
        }
      }
      this.UserlistCount = this.Userlist.length
      this.ClotlistCount = data.length - this.UserlistCount
    },
    // 用户点击歌单栏跳转到对应歌单页
    toSonglist(id) {
      this.itemshow = id
      this.$router.push({
        path: '/Playlist',
        query: {
          id
        }
      })
    },
    // 跳转回主页面
    toMain() {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v92/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
}
.inspiration {
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  font-family: 'Gill Sans', sans-serif;
  color: #000;
  text-shadow: 0 0 1px #fff;
  overflow-y: overlay;
  margin-right: 6px;
}
.item {
  align-items: left;
}
.left,
.right {
  position: relative;
}
.left {
  overflow: auto;
}
.left .controls {
  position: absolute;
  top: 13px;
  left: 13px;
}
.left .controls .close,
.left .controls .minimize,
.left .controls .maximize {
  display: inline-block;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  margin-right: 3px;
}
.left .controls .close {
  background-color: #fe5e57;
}
.left .controls .minimize {
  background-color: #ffbd2e;
}
.left .controls .maximize {
  background-color: #29ca42;
}
.left .menu,
.left .playlists {
  margin: 50px 20px;
  color: rgba(51,51,51,0.7);
}
.left .menu .title,
.left .playlists .title {
  text-align: left;
  margin: 10px 0;
}
.left .menu .item,
.left .playlists .item {
  position: relative;
  padding: 3px 0 3px 25px;
  margin: 10px 0;
  cursor: pointer;
  text-align: left;
}
.left .menu .item:hover:before,
.left .playlists .item:hover:before {
  content: '';
  position: absolute;
  top: -1px;
  left: -18px;
  width: 3px;
  height: 17px;
  background-color: #000;
  border-radius: 0 3px 3px 0;
}
.left .menu .item:hover,
.left .playlists .item:hover,
.left .menu .item.highlight,
.left .playlists .item.highlight {
  color: #333;
}
.left .menu .item i.material-icons,
.left .playlists .item i.material-icons {
  position: absolute;
  left: 0px;
  top: 2px;
  font-size: 15px;
}
.right {
  flex: 1 1 auto;
  padding-left: 30px;
  background-color: transparent;
  background-color: rgba(243,245,248,0.6);
}
.right .search {
  position: relative;
  margin-top: 15px;
  display: flex;
  align-items: center;
}
.right .search input {
  width: 210px;
  border: none;
  outline: none;
  background: none;
}
.right .account {
  position: absolute;
  top: 10px;
  right: 20px;
  display: flex;
  align-items: center;
}
.right .avatar {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-left: 5px;
  border-radius: 50%;
  background-color: #333;
}
.right .row {
  margin-top: 20px;
}
.right h1 {
  display: inline;
  font-size: 25px;
}
.right button.play {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  width: 77px;
  height: 30px;
  margin-left: 10px;
  border: 1px solid #fff;
  border-radius: 20px;
  background: linear-gradient(to right, #6377ff, #94a2fe);
  color: #fff;
  vertical-align: top;
}
.right .albums {
  margin-top: 15px;
}
.right .albums .album {
  display: inline-block;
  padding-right: 15px;
  padding-bottom: 15px;
}
.right .albums .album img {
  width: 100px;
  border-radius: 7px;
}
.right .albums .album .album-title {
  text-align: center;
  padding: 5px;
}
.right .split {
  display: flex;
}
.right .daily-mix {
  width: 55%;
}
.right .daily-mix h1 {
  display: block;
  margin-bottom: 20px;
}
.right .daily-mix .song {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  margin-left: -5px;
  padding: 5px;
  cursor: pointer;
}
.right .daily-mix .song > * {
  width: 20%;
}
.right .daily-mix .song img {
  width: 25px;
  height: 25px;
  border-radius: 4px;
}
.right .daily-mix .song .duration {
  width: 28px;
}
.right .play-lists {
  width: 45%;
  margin-left: 20px;
}
.right .play-lists h1 {
  display: block;
  margin-bottom: 20px;
}
.right .play-lists .playlist {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 44%;
  height: 30%;
  margin: 0 5% 5% 0;
  border-radius: 5px;
  box-shadow: 0px 1px 10px 1px #d3d3d3;
  background-color: #fff;
  cursor: pointer;
}
.right .play-lists i {
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 16px;
}
.right .current-play {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 0;
  width: 100%;
  height: 70px;
  padding: 10px;
  margin-left: -30px;
  background-color: #f3f5f8;
}
.right .current-play .info {
  display: flex;
}
.right .current-play img {
  width: 50px;
  height: 50px;
  border-radius: 5px;
}
.right .current-play .song {
  display: flex;
  flex-direction: column;
  padding: 8px;
}
.right .current-play .song .name {
  font-size: 16px;
  font-weight: bold;
}
.right .current-play .song .artist {
  margin-top: 3px;
}
.right .current-play .controls {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
}
.right .current-play .controls > * {
  margin: 0 10px;
}
.right .current-play .controls .prev,
.right .current-play .controls .next {
  color: #7584f4;
}
.right .current-play .controls .play {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #fff;
  background: linear-gradient(to right bottom, #7584f4, #5463ec);
  border-radius: 50%;
  border: 1px solid #fff;
}
.right .current-play .controls .repeat,
.right .current-play .controls .shuffle {
  color: #d3d3d3;
}
.right .current-play .controls .repeat i,
.right .current-play .controls .shuffle i {
  font-size: 15px;
}
.right .current-play .volume {
  display: flex;
  justify-content: flex-end;
  width: 150px;
}
.right .current-play .volume i {
  color: #7584f4;
}
.right .current-play .volume .slider {
  position: relative;
  width: 125px;
  cursor: pointer;
}
.right .current-play .volume .slider__track-container {
  position: absolute;
  top: 50%;
  width: 100%;
  height: 6px;
  background-color: #fff;
  transform: translateY(-50%);
  border: 1px solid #eee;
  border-radius: 5px;
}
.right .current-play .volume .slider__track {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: #7584f4;
  transform-origin: left top;
  will-change: transform;
  transform: scaleX(0.6);
}
.right .current-play .volume .slider__thumb {
  width: 15px;
  height: 15px;
  transform: translate(70px, 5px);
  background-color: #7584f4;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0px 0px 5px -1px #b2b2b2;
}
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
}
.songlist-ul {
  list-style: none;
  padding-inline-start: 0;
  transition: height 1s ease;
  overflow: hidden;
  li {
    display: block;
    text-align: left;
    width: 100px;
    height: 26px;
    line-height: 26px;
    margin-bottom: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
.itemshow {
  background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
}
</style>