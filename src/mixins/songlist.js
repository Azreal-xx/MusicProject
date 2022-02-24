import axios from "axios"
import { Message } from "element-ui"

export const songlist = {
    data() {
        return {
            isShowing: false
        }
    },
    methods: {
        load () {
            this.count += 2
        },
        toMv(id) {
            this.$router.push({
                path: `/Playmv`,
                query: {
                    id
                }
            })
        },
        playMusic(id) {
            const _this = this
            // 获取歌曲播放url
            axios.get('https://netease-cloud-music-api-seven-omega.vercel.app/song/url', {
                params: {
                    id
                }
            })
            .then(function(response) {
                if(response.data.data[0].url) {
                    _this.$store.commit('setplayUrl', response.data.data[0].url)
                    // 获取歌曲详细信息
                    axios.get('https://netease-cloud-music-api-seven-omega.vercel.app/song/detail', {
                        params: {
                            ids: id
                        }
                    })
                    .then(function(response) {
                        let singerNames = ''
                        for(let singer in response.data.songs[0].ar) {
                            singerNames = singerNames + response.data.songs[0].ar[singer].name + '/'
                        }
                        singerNames = singerNames.slice(0, -1)
                        _this.$store.commit('setplayPic', response.data.songs[0].al.picUrl)
                        _this.$store.commit('setplayName', response.data.songs[0].name)
                        _this.$store.commit('setplaySinger', singerNames)
                    })
                    .catch(function(error) {
                        console.log(error)
                    })
                }else {
                    _this.$store.commit('setplayUrl', '')
                    axios.get('https://netease-cloud-music-api-seven-omega.vercel.app/song/detail', {
                        params: {
                            ids: id
                        }
                    })
                    .then(function(response) {
                        let singerNames = ''
                        for(let singer in response.data.songs[0].ar) {
                            singerNames = singerNames + response.data.songs[0].ar[singer].name + '/'
                        }
                        singerNames = singerNames.slice(0, -1)
                        _this.$store.commit('setplayPic', response.data.songs[0].al.picUrl)
                        _this.$store.commit('setplayName', response.data.songs[0].name)
                        _this.$store.commit('setplaySinger', singerNames)
                    })
                    Message({
                        message: "没有该歌曲的资源哦"
                    })
                }
            })
            .catch(function(error) {
                console.log(error)
            })

        }
    }
}