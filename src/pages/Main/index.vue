<template>
  <div class="mainpage">
        <Swiper :banner='banner' :count='count' />
        <span class="first-title">推荐歌单 &gt;</span>
        <Songlist :songlist='songlist' />
        <span class="second-title">独家放送 &gt;</span>
        <Longsonglist :longsonglist='longsonglist' />
        <!-- <span class="third-title">最新音乐 &gt;</span>
        <Newsonglist :Leftsonglist="Leftsonglist" :Midsonglist="Midsonglist" :Rightsonglist="Rightsonglist"  /> -->
        <span class="fourth-title">推荐MV &gt;</span>
        <Newmv :Mvlist="Mvlist" />
  </div>
</template>

<script>
import Swiper from '../../components/Others/Swiper.vue'
import Songlist from '../../components/Songlist/Songlist'
import Longsonglist from '../../components/Songlist/Longsonglist'
import Newsonglist from '../../components/Songlist/Newsonglist'
import Newmv from '../../components/Others/Newmv.vue'
import axios from 'axios'

export default {
    name: 'Mainpage',
    data() {
        return{
            banner: [],
            songlist: [],
            longsonglist: [],
            Rightsonglist: [], 
            Midsonglist: [], 
            Leftsonglist: [],
            Mvlist: [],
            count: "1"
        }
    },
    components: {
        Swiper,
        Songlist,
        Longsonglist,
        Newsonglist,
        Newmv
    },
    created() {
        const _this = this

        // 获取首页banners
        axios.get("http://localhost:3000/banner")
        .then(function(response) {
            _this.banner = {...response.data.banners}
        })
        .catch(function(err) {
            console.log(err)
        })

        // 获取未登录情况下的推荐歌单
        axios.get("http://localhost:3000/personalized?limit=8")
        .then(function(response) {
            _this.songlist = {...response.data.result}
        })
        .catch(function(err) {
            console.log(err)
        })

        // 获取独家放送
        axios.get("http://localhost:3000/personalized/privatecontent")
        .then(function(response) {
            _this.longsonglist = {...response.data.result}
        })
        .catch(function(err) {
            console.log(err)
        })

        // 获取新歌速递
        axios.get("http://localhost:3000/top/song?type=96")
        .then(function(response) {
            _this.Leftsonglist = {...response.data.data.slice(0, 4)}
            _this.Midsonglist = {...response.data.data.slice(4, 8)}
            _this.Rightsonglist = {...response.data.data.slice(8, 12)}
        })
        .catch(function(err) {
            console.log(err)
        })

        // 获取推荐Mv
        axios.get("http://localhost:3000/personalized/mv")
        .then(function(response) {
            _this.Mvlist = {...response.data.result}
        })
        .catch(function(err) {
            console.log(err)
        })
    }
}
</script>

<style lang="scss" scoped>
.mainpage {
    width: 100%;
    height: 100%;
    padding: 50px 20px 120px 20px;
    overflow: auto;
}
.first-title,.second-title,
.third-title,.fourth-title{
    display: block;
    width: 70%;
    height: 30px;
    margin: 15px auto 10px auto;
    padding-left: 26.5px;
    text-align: left;
    line-height: 30px;
    font-size: 24px;
    font-weight: 800;
}
</style>