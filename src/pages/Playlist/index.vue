<template>
    <div class="container">
        <Header :desc="desc" 
                :name="name" 
                :playCount="playCount" 
                :trackCount="trackCount" 
                :tags="tags" 
                :creator="creator" 
                :coverImgUrl="coverImgUrl"
                :updateTime="updateTime"
                :subscribedCount="subscribedCount"
                :shareCount="shareCount"
            ></Header>
        <Navlink :tracks="tracks"
                 :commentCount="commentCount"
                 :id="id"
            ></Navlink>
    </div>
</template>

<script>
import Header from '../../components/Playlist/Header.vue'
import Navlink from '../../components/Playlist/Navlink.vue'
import axios from 'axios'

export default {
    name: 'Album',
    data() {
        return{
            id: "",
            desc: "",
            name: "",
            playCount: "",
            trackCount: "",
            tags: [],
            creator: [],
            coverImgUrl: "",
            updateTime: "",
            subscribedCount: "",
            shareCount: "",
            tracks: [],
            commentCount: ""
        }
    },
    components: {
        Header,
        Navlink
    },
    created() {
        const id = this.$route.query.id
        const cookie = this.$root.cookie
        const _this = this
        _this.id = id
        axios.get("https://cheshire-api.vercel.app/api/loginuserlist", { params: {
            id,
            cookie
        } })
        .then(function(response) {
            console.log(response)
            _this.desc = response.data.playlist.description
            _this.name = response.data.playlist.name
            _this.playCount = response.data.playlist.playCount
            _this.trackCount = response.data.playlist.trackCount
            _this.tags = response.data.playlist.tags
            _this.creator = response.data.playlist.creator
            _this.coverImgUrl = response.data.playlist.coverImgUrl
            _this.updateTime = response.data.playlist.updateTime
            _this.subscribedCount = response.data.playlist.subscribedCount
            _this.shareCount = response.data.playlist.shareCount
            _this.tracks = response.data.playlist.tracks
            _this.commentCount = response.data.playlist.commentCount
        })
        .catch(function(err) {
            console.log(err)
        })
    },
    methods: {
        setlistpage(id) {
            const cookie = this.$root.cookie
            const _this = this
            _this.id = id
            axios.get("https://cheshire-api.vercel.app/api/loginuserlist", { params: {
                id,
                cookie
            } })
            .then(function(response) {
                _this.desc = response.data.playlist.description
                _this.name = response.data.playlist.name
                _this.playCount = response.data.playlist.playCount
                _this.trackCount = response.data.playlist.trackCount
                _this.tags = response.data.playlist.tags
                _this.creator = response.data.playlist.creator
                _this.coverImgUrl = response.data.playlist.coverImgUrl
                _this.updateTime = response.data.playlist.updateTime
                _this.subscribedCount = response.data.playlist.subscribedCount
                _this.shareCount = response.data.playlist.shareCount
                _this.tracks = response.data.playlist.tracks
                _this.commentCount = response.data.playlist.commentCount
            })
            .catch(function(err) {
                console.log(err)
            })
        }
    },
    watch: {
        '$route': {
            handler(newquery) {
                this.setlistpage(newquery.query.id)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    overflow: auto;
}
</style>