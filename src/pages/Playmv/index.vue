<template>
    <div class="mv-container">
        <div class="video-container">
            <vue-core-video-player :autoplay="false" :src=videoSource ></vue-core-video-player>
            <div class="mv-info">
                <h2>{{ infos.name }}</h2>
                <div class="atr-name">
                    <a>{{ infos.artistName }}</a>
                    <span>{{ infos.publishTime }}</span> 
                    <span>{{ infos.playCount }}</span>
                </div>
            </div>
        </div>
        <div class="recommend-container">

            <div class="recommend-item" v-for="recommend in recommends" :key="recommend.id">
                <div class="recommend-left" @click="toMv(recommend.id)">
                    <i>
                        <svg t="1626417862286" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1229" width="16" height="16"><path d="M324.387089 799.725159c-27.824588 0-46.518629-22.563107-46.518629-56.147003V280.420596c0-33.582647 18.694041-56.145755 46.518629-56.145755 10.736316 0 21.991668 3.355021 33.455384 9.973982l401.109015 231.580027c20.318525 11.73072 31.50775 28.129023 31.50775 46.173022 0 18.045246-11.190473 34.441054-31.50775 46.171773L357.842473 789.752425c-11.463715 6.616465-22.719068 9.972734-33.455384 9.972734z m0-550.497897c-20.009099 0-21.564961 23.87567-21.564961 31.192086v463.157561c0 9.378836 2.101099 31.193334 21.564961 31.193333 6.210968 0 13.465-2.291994 20.977302-6.628942l401.109015-231.57878c12.093796-6.983284 19.030915-15.934165 19.030915-24.561896 0-8.627731-6.93712-17.57986-19.030915-24.563144L345.365638 255.857452c-7.51355-4.336948-14.767581-6.63019-20.978549-6.63019z" fill="#ffffff" p-id="1230"></path></svg>
                        <span>{{ recommend.playCount }}</span>
                    </i>
                    <span class="recommed-time">
                        {{ recommend.duration | setTime }}
                    </span>
                    <a>
                        <img :src=recommend.cover />
                    </a>
                </div>
                <div class="recommend-right">
                    <span>{{ recommend.name }}</span>
                    <span class="art-user">by {{ recommend.artistName }}</span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Playmv",
    data() {
        return {
            url: "",
            infos: [],
            recommends: [],
            videoSource: [
                {
                    src: "",
                    resolution: '1080p'
                }
            ]
        }
    },
    created() {
        let id = this.$route.query.id

        this.setMvpage(id)
    },
    methods: {
        toMv(id) {
            this.$router.push({
                path: `/Playmv`,
                query: {
                    id
                }
            })
        },
        setMvpage(id) {
            const _this = this
            // 专门处理mv播放地址
            axios.get("https://netease-cloud-music-api-seven-omega.vercel.app/mv/url", { params: {
                id
            } })
            .then(function(response) {
                _this.videoSource[0].src = response.data.data.url
                _this.url = response.data.data.url
            })
            .catch(function(err) {
                console.log(err)
            })

            // 处理mv具体信息
            axios.get("https://netease-cloud-music-api-seven-omega.vercel.app/mv/detail", { params: {
                mvid: id,
            } })
            .then(function(response) {
                _this.infos = response.data.data
            })
            .catch(function(err) {
                console.log(err)
            })

            // 处理mv的相关推荐
            axios.get("https://netease-cloud-music-api-seven-omega.vercel.app/simi/mv", { params: {
                mvid: id,
            } })
            .then(function(response) {
                _this.recommends = response.data.mvs
            })
            .catch(function(err) {
                console.log(err)
            })
        }
    },
    // 监听路由中的query变化，拿到更新的query重新渲染页面
    watch: {
        '$route': {
            handler(newquery) {
                this.setMvpage(newquery.query.id)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.mv-container {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 30px 0px 0px 30px;
    .video-container {
        width: 1000px;
        height: 565px;
        .mv-info {
            text-align: left;
            h2 {
                font-size: 24px;
            }
            .atr-name {
                display: flex;
                span {
                    display: block;
                    margin-right: 10px;
                    color: #636e72;
                }
                a {
                    display: block;
                    margin-right: 20px;
                    position: relative;
                    i {
                        position: absolute;
                    }
                }
            }
        }
    }
    .recommend-container {
        width: 300px;
        height: 500px;
        margin-left: 100px;
        .recommend-item {
            height: 100px;
            width: 100%;
            display: flex;
            padding: 0px 0px 20px 0px;
            .recommend-left {
                width: 140px;
                height: 80px;
                position: relative;
                a {
                    width: 140px;
                    height: 80px;
                    img {
                        width: 140px;
                        height: 80px;
                        object-fit: cover;
                        border-radius: 5px;
                    }
                }
                i {
                    position: absolute;
                    color: white;
                    display: block;
                    height: 16px;
                    line-height: 16px;
                    right: 8px;
                    top: 3px;
                    display: flex;
                }
                .recommed-time {
                    position: absolute;
                    display: block;
                    bottom: 5px;
                    right: 8px;
                    color: white;
                }
                &:hover {
                    cursor: pointer;
                }
            }
            .recommend-right {
                width: 200px;
                height: 80px;
                padding-left: 10px;
                span {
                    display: block;
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                    text-align: left;
                    &:hover {
                        cursor: pointer;
                    }
                }
                .art-user {
                    color: #636e72;
                }
            }
        }
    }
}
</style>