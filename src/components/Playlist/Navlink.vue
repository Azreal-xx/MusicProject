<template>
    <div class="nav-container">
        <ul class="switch-header">
            <li class="switch-header-item" @click="setShow(1)" :class="{ 'is-active': isShow === '1' }">歌曲列表</li>
            <li class="switch-header-item" @click="setShow(2)" :class="{ 'is-active': isShow === '2' }">评论者 ({{ commentCount }})</li>
            <li class="switch-header-item" @click="setShow(3)" :class="{ 'is-active': isShow === '3' }">收藏</li>
        </ul>
        <Songlist :tracks="tracks" v-if="isShow === '1'" ></Songlist>
        <Comment v-if="isShow === '2'" :id="id" ></Comment>
        <Subscribe v-if="isShow === '3'" :id="id" ></Subscribe>
    </div>
</template>

<script>
import Songlist from './Songlist.vue'
import Comment from './Comment'
import Subscribe from './Subscribe.vue'

export default {
    data() {
        return {
            isShow: "1"
        }
    },
    props: ["tracks", "commentCount", "id"],
    components: {
        Songlist,
        Comment,
        Subscribe
    },
    methods: {
        setShow(isShow) {
            this.isShow = isShow.toString()
        }
    }
}
</script>

<style lang="scss" scoped>
li, ol, ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.is-active {
    border-bottom: 2px solid red;
}
.nav-container {
    width: 100%;
    padding-left: 30px;
    margin: auto;
    height: 50px;
    .switch-header {
        position: relative;
        height: 50px;
        width: 100%;
        white-space: nowrap;
        text-align: left;
        flex-grow: 1;
        &-item {
            display: inline-block;
            height: 24px;
            margin-right: 20px;
            line-height: 24px;
            vertical-align: middle;
            white-space: nowrap;
            &:hover {
                cursor: pointer;
            }
        }
    }
}
</style>