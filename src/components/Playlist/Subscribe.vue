<template>
    <div class="subscribe-container">

        <div class="subscribe-item" v-for="subscribe in subscribes" :key="subscribe.userId" >
            <div class="subscribe-left">
                <a>
                    <img :src=subscribe.avatarUrl />
                </a>
            </div>
            <div class="subscribe-right">
                <span class="name">{{ subscribe.nickname }}</span>
                <span class="desc">{{ subscribe.signature ? subscribe.signature : "" }}</span>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Subscribe",
    props: ["id"],
    data() {
        return {
            subscribes: []
        }
    },
    created() {
        const _this = this
        let id = this.$props.id
        axios.get("http://localhost:3000/playlist/subscribers", { params: {
            id,
        } })
        .then(function(response) {
            _this.subscribes = response.data.subscribers
        })
        .catch(function(err) {
            console.log(err)
        })
    }
}
</script>

<style lang="scss" scoped>
.subscribe-container {
    width: 100%;
    height: 500px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    flex-grow: 1;
}
.subscribe-item {
    width: 25%;
    margin-right: 1%;
    margin-bottom: 1%;
    height: 110px;
    display: flex;
    border-radius: 10px;
    border: 1px solid #b2bec3;
    padding: 10px 0px 10px 20px;
    .subscribe-left {
        width: 100px;
        height: 100%;
        padding-right: 10px;
        a {
            display: block;
            width: 90px;
            height: 90px;
            border-radius: 50px;
            overflow: hidden;
            img {
                width: 90px;
                height: 90px;
            }
        }
    }
    
    .subscribe-right {
        width: calc(100% - 100px);
        height: 90px;
        padding-top: 10px;
        padding-bottom: 10px;
        text-align: left;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        span {
            display: block;
            width: 100%;
            height: 20px;
            line-height: 20px;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-bottom: 20px;
        }
    }
}
</style>