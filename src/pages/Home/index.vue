<template>
    <div id="home">
        <Leftbar/>
        <div class="right">
          <Header/>
          <router-view></router-view>
          <Player/>
        </div>
    </div>
</template>

<script>
import Leftbar from '../../components/Main/Leftbar.vue'
import Header from '../../components/Main/Header.vue'
import Mainpage from '../Main'
import Player from '../../components/Main/Player.vue'

export default {
    name: 'Home',
    components: {
        Leftbar,
        Header,
        Mainpage,
        Player
    },
    created() {
      if(localStorage.getItem("bgImg")){
        document.body.style.backgroundImage = "url(" + localStorage.getItem("bgImg") + ")"
        document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundSize = "cover"
      }
    }
}
</script>

<style>
#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#home {
  position: absolute;
  display: flex;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  height: 85vh;
  background: inherit;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 1px 8px -2px #808080;
}
#home:before {
  content: '';
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: -7.5vh;
  left: -5vw;
  background: inherit;
  box-shadow: inset 0 0 0 50vh rgba(255,255,255,0.2);
  filter: blur(6px);
}

::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: #F5F5F5;
    border-radius: 5px;
}
::-webkit-scrollbar-thumb {
    background-color: #999;
    border-radius: 5px;
}
</style>