<template>
  <div class="w-full h-full overflow-auto">
      <Searchsonglist :tracks="tracks"
      ></Searchsonglist>
  </div>
</template>

<script>
import axios from 'axios'
import Searchsonglist from '../../components/Playlist/Searchsonglist.vue'
export default {
    name: "Search",
    data() {
        return {
            tracks: []
        }
    },
    components: {
        Searchsonglist
    },
    created() {
        const _this = this
        const keywords = this.$route.query.keyword
        axios.get("http://localhost:3000/search", { params: {
            keywords
        } })
        .then(function(response) {
            console.log(response.data.result.songs)
            _this.tracks = response.data.result.songs
        })
        .catch(function(err) {
            console.log(err)
        })
    },
    methods: {
        setSearchpage(keywords) {
            const _this = this
            axios.get("http://localhost:3000/search", { params: {
                keywords
            } })
            .then(function(response) {
                console.log(response.data.result.songs)
                _this.tracks = response.data.result.songs
            })
            .catch(function(err) {
                console.log(err)
            })
        }
    },
    watch: {
        '$route': {
            handler(newquery) {
                this.setSearchpage(newquery.query.keyword)
            }
        }
    }
}
</script>

<style>

</style>