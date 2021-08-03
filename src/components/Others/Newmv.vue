<template>
    <div class="container">

        <div class="mv-item" v-for="mv in Mvlist" :key="mv.id">
            <div class="play-count">
                <svg t="1626417862286" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1229" width="32" height="32"><path d="M324.387089 799.725159c-27.824588 0-46.518629-22.563107-46.518629-56.147003V280.420596c0-33.582647 18.694041-56.145755 46.518629-56.145755 10.736316 0 21.991668 3.355021 33.455384 9.973982l401.109015 231.580027c20.318525 11.73072 31.50775 28.129023 31.50775 46.173022 0 18.045246-11.190473 34.441054-31.50775 46.171773L357.842473 789.752425c-11.463715 6.616465-22.719068 9.972734-33.455384 9.972734z m0-550.497897c-20.009099 0-21.564961 23.87567-21.564961 31.192086v463.157561c0 9.378836 2.101099 31.193334 21.564961 31.193333 6.210968 0 13.465-2.291994 20.977302-6.628942l401.109015-231.57878c12.093796-6.983284 19.030915-15.934165 19.030915-24.561896 0-8.627731-6.93712-17.57986-19.030915-24.563144L345.365638 255.857452c-7.51355-4.336948-14.767581-6.63019-20.978549-6.63019z" fill="#ffffff" p-id="1230"></path></svg>
                <span>{{ mv.playCount | Otthprocessing }}</span>
            </div>
            <a @click="toMv(mv.id)">
                <img :src=mv.picUrl />
            </a>
            <span>{{ mv.artistName }}</span>
            <span class="singer">{{ mv.artists | Singersname }}</span>
        </div>

    </div>
</template>
    
<script>
export default {
    name: 'Newmv',
    props: ['Mvlist'],
    methods: {
        toMv(id) {
            this.$router.push({
                path: `/Playmv`,
                query: {
                    id
                }
            })
        }
    }
    
}
</script>

<style lang="scss" scoped>
.container{
    width: 70%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 0px 26.5px 0px 26.5px;
    .mv-item {
        position: relative;
        width: 241.25px;
        height: 168px;
        .play-count {
            position: absolute;
            display: flex;
            align-content: center;
            right: 8px;
            height: 32px;
            line-height: 32px;
            top: 5px;
            span {
                display: block;
                height: 20px;
                line-height: 20px;
                color: white;
            }
        }
        a {
            display: block;
            width: 241.25px;
            height: 130px;
            img {
                width: 241.25px;
                height: 130px;
                object-fit: cover;
                border-radius: 5px 5px 5px 5px;
            }
            &:hover {
                cursor: pointer;
            }
        }
        span {
            display: block;
            width: 100%;
            height: 14px;
            line-height: 14px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            text-align: left;
            font-size: 14px;
            margin-top: 5px;
        }
        .singer {
            font-size: 12px;
            color: #95a5a6;
        }
    }
}
</style>