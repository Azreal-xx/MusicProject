<template>
    <div class="current-play">
      <div class="info"><img src="https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg"/>
        <div class="song">
          <div class="name">Daydream</div>
          <div class="artist">Tycho</div>
        </div>
      </div>
      <div class="controls">
        <div class="repeat"><i class="material-icons">repeat</i></div>
        <div class="prev"><i class="material-icons">fast_rewind</i></div>
        <div class="play"><i class="material-icons">play_arrow</i></div>
        <div class="next"><i class="material-icons">fast_forward</i></div>
        <div class="shuffle"><i class="material-icons">shuffle</i></div>
      </div>
      <div class="volume"><i class="material-icons">volume_up        </i>
        <div class="slider" role="slider">
          <div class="slider__track-container">
            <div class="slider__track"></div>
          </div>
          <div class="slider__thumb"></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Player'
}
</script>

<style scoped>
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
  background-color: hsl(41, 100%, 59%);
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
  margin: 10px 0;
}
.left .menu .item,
.left .playlists .item {
  position: relative;
  padding: 3px 0 3px 25px;
  margin: 10px 0;
  cursor: pointer;
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
 .search {
  position: relative;
  margin-top: 15px;
  display: flex;
  align-items: center;
}
 .search input {
  width: 210px;
  border: none;
  outline: none;
  background: none;
}
 .account {
  position: absolute;
  top: 10px;
  right: 20px;
  display: flex;
  align-items: center;
}
 .avatar {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-left: 5px;
  border-radius: 50%;
  background-color: #333;
}
 .row {
  margin-top: 20px;
}
 h1 {
  display: inline;
  font-size: 25px;
}
 button.play {
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
 .albums {
  margin-top: 15px;
}
 .albums .album {
  display: inline-block;
  padding-right: 15px;
  padding-bottom: 15px;
}
 .albums .album img {
  width: 100px;
  border-radius: 7px;
}
 .albums .album .album-title {
  text-align: center;
  padding: 5px;
}
 .split {
  display: flex;
}
 .daily-mix {
  width: 55%;
}
 .daily-mix h1 {
  display: block;
  margin-bottom: 20px;
}
 .daily-mix .song {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  margin-left: -5px;
  padding: 5px;
  cursor: pointer;
}
 .daily-mix .song > * {
  width: 20%;
}
 .daily-mix .song img {
  width: 25px;
  height: 25px;
  border-radius: 4px;
}
 .daily-mix .song .duration {
  width: 28px;
}
 .play-lists {
  width: 45%;
  margin-left: 20px;
}
 .play-lists h1 {
  display: block;
  margin-bottom: 20px;
}
 .play-lists .playlist {
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
.play-lists i {
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 16px;
}
.current-play {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 0;
  width: 100%;
  height: 70px;
  padding: 10px;
  background-color: #f3f5f8;
}
 .current-play .info {
  display: flex;
}
 .current-play img {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin-top: 8px;
}
 .current-play .song {
  display: flex;
  flex-direction: column;
  padding: 8px;
}
 .current-play .song .name {
  font-size: 16px;
  font-weight: bold;
}
 .current-play .song .artist {
  margin-top: 3px;
}
 .current-play .controls {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
}
 .current-play .controls > * {
  margin: 0 10px;
}
 .current-play .controls .prev,
 .current-play .controls .next {
  color: #7584f4;
}
 .current-play .controls .play {
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
 .current-play .controls .repeat,
 .current-play .controls .shuffle {
  color: #d3d3d3;
}
 .current-play .controls .repeat i,
 .current-play .controls .shuffle i {
  font-size: 15px;
}
 .current-play .volume {
  display: flex;
  justify-content: flex-end;
  width: 150px;
}
 .current-play .volume i {
  color: #7584f4;
}
 .current-play .volume .slider {
  position: relative;
  width: 125px;
  cursor: pointer;
}
 .current-play .volume .slider__track-container {
  position: absolute;
  top: 50%;
  width: 100%;
  height: 6px;
  background-color: #fff;
  transform: translateY(-50%);
  border: 1px solid #eee;
  border-radius: 5px;
}
 .current-play .volume .slider__track {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: #7584f4;
  transform-origin: left top;
  will-change: transform;
  transform: scaleX(0.6);
}
 .current-play .volume .slider__thumb {
  width: 15px;
  height: 15px;
  transform: translate(70px, 5px);
  background-color: #7584f4;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0px 0px 5px -1px #b2b2b2;
}

</style>