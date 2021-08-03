<template>
    <div class="container">

        <div class="songlist-container" v-for="song in longsonglist" :key="song.id">
            <i>
                <svg t="1626425204901" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2251" width="32" height="32"><path d="M512 65c247.424 0 448 200.576 448 448S759.424 961 512 961 64 760.424 64 513 264.576 65 512 65z m0 64c-212.077 0-384 171.923-384 384s171.923 384 384 384 384-171.923 384-384-171.923-384-384-384z m-63 214.657a64 64 0 0 1 33.593 9.525L655.857 460.03c30.086 18.552 39.435 57.982 20.882 88.067a64 64 0 0 1-21.324 21.152L482.151 674.17c-30.235 18.308-69.587 8.64-87.896-21.594A64 64 0 0 1 385 619.425V407.657c0-35.346 28.654-64 64-64z m1.196 74.49a8 8 0 0 0-1.196 4.207v183.432a8 8 0 0 0 12.15 6.84l149.688-90.851a8 8 0 0 0 0.057-13.643L461.208 415.55a8 8 0 0 0-11.012 2.595z" fill="#ffffff" p-id="2252"></path></svg>
            </i>
            <a>
                <img :src=song.sPicUrl />
            </a>
            <span>{{ song.name }}</span>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Longsonglist',
    props: ['longsonglist']
}
</script>

<style lang="scss" scoped>
.container {
    width: 70%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 0px 26.5px 0px 26.5px;
    .songlist-container {
        position: relative;
        width: 300px;
        height: 180px;
        a {
            display: block;
            width: 300px;
            height: 152px;
            border-radius: 5px 5px 5px 5px;
            overflow: hidden;
            img {
                width: 300px;
                height: 152px;
                object-fit: cover;
            }
        }
        span {
            width: 100%;
            height: 38px;
            text-align: left;
            line-height: 19px;
            margin: 3px 0px 3px 0px;
            display: block;
            font: 14px;
            overflow: hidden;
        }
        i {
            position: absolute;
            left: 5px;
            top: 5px;
        }
    }
}
</style>