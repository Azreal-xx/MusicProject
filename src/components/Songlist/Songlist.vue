<template>
  <div class="container">

      <div class="songlist-container" v-for="(song, index) in songlist" :key="song.id">
          <div class="play-count">
              <svg t="1626417862286" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1229" width="32" height="32"><path d="M324.387089 799.725159c-27.824588 0-46.518629-22.563107-46.518629-56.147003V280.420596c0-33.582647 18.694041-56.145755 46.518629-56.145755 10.736316 0 21.991668 3.355021 33.455384 9.973982l401.109015 231.580027c20.318525 11.73072 31.50775 28.129023 31.50775 46.173022 0 18.045246-11.190473 34.441054-31.50775 46.171773L357.842473 789.752425c-11.463715 6.616465-22.719068 9.972734-33.455384 9.972734z m0-550.497897c-20.009099 0-21.564961 23.87567-21.564961 31.192086v463.157561c0 9.378836 2.101099 31.193334 21.564961 31.193333 6.210968 0 13.465-2.291994 20.977302-6.628942l401.109015-231.57878c12.093796-6.983284 19.030915-15.934165 19.030915-24.561896 0-8.627731-6.93712-17.57986-19.030915-24.563144L345.365638 255.857452c-7.51355-4.336948-14.767581-6.63019-20.978549-6.63019z" fill="#ffffff" p-id="1230"></path></svg>
              <span>{{ song.playCount | Otthprocessing }}</span>
          </div>
          <div class="showplay" v-show="showindex === index">
              <svg t="1626513836886" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10446" width="32" height="32"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#E73828" p-id="10447"></path><path d="M846.185477 516.409392L343.004261 806.918684a1.415647 1.415647 0 0 1-2.123471-1.160367V224.670112a1.415647 1.415647 0 0 1 2.123471-1.229989l503.181216 290.509292a1.42725 1.42725 0 0 1 0 2.459977z" fill="#E73828" p-id="10448"></path><path d="M382.665579 794.792856a59.178678 59.178678 0 0 1-58.935002-59.016227V294.570574a58.935001 58.935001 0 0 1 88.36189-51.056115L794.189466 464.146496a58.911794 58.911794 0 0 1 0 102.112229L412.092467 786.809537a58.818965 58.818965 0 0 1-29.426888 7.983319z m0-524.891668a24.739008 24.739008 0 0 0-24.657783 24.669386v441.206055a24.657783 24.657783 0 0 0 36.980872 21.339136l382.062189-220.597226a24.622972 24.622972 0 0 0 0-42.678271L394.988668 273.243042a24.599764 24.599764 0 0 0-12.323089-3.341854z" fill="#FFFFFF" p-id="10449"></path><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#E73828" p-id="10450"></path><path d="M846.185477 516.409392L343.004261 806.918684a1.415647 1.415647 0 0 1-2.123471-1.160367V224.670112a1.415647 1.415647 0 0 1 2.123471-1.229989l503.181216 290.509292a1.42725 1.42725 0 0 1 0 2.459977z" fill="#E73828" p-id="10451"></path><path d="M382.665579 811.966277a76.38691 76.38691 0 0 1-76.073611-76.189648V294.570574a76.073611 76.073611 0 0 1 114.110416-65.862388l382.062189 220.585622a76.073611 76.073611 0 0 1 0 131.771191l-382.062189 220.585622a75.992385 75.992385 0 0 1-38.036805 10.315656z m0-524.949687a7.484362 7.484362 0 0 0-3.759587 1.07914 7.147856 7.147856 0 0 0-3.759586 6.486447v441.194452a7.530777 7.530777 0 0 0 11.267156 6.509655l382.073792-220.60883a7.495966 7.495966 0 0 0 0-12.996101l-382.073792-220.585623a7.298704 7.298704 0 0 0-3.747983-1.07914z" fill="#FFFFFF" p-id="10452"></path></svg>
          </div>
          <a @mouseenter="showplay(index)" @mouseleave="noshowplay(index)" @click="toAlbum(song.id)" >
            <img :src=song.picUrl  />
          </a>
          <span>{{ song.name }}</span>
      </div>

  </div>
</template>

<script>
export default {
    name: "Songlist",
    props: ['songlist'],
    data() {
      return {
            showindex: "999"
      }
    },
    methods: {
        showplay(index) {
            this.showindex = index + ""
        },
        noshowplay(index) {
            this.showindex = "99"
        },
        toAlbum(id) {
            this.$router.push({
                path: `/Playlist`,
                query: {
                    id
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
* {
    margin: 0px;
    padding: 0px;
}
.container {
    width: 70%;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    justify-content: space-between;
}

@keyframes fadeIn {
    0% {
        opacity: 0; /*初始状态 透明度为0*/
    }
    50% {
        opacity: 0; /*中间状态 透明度为0*/
    }
    100% {
        opacity: 1; /*结尾状态 透明度为1*/
    }
}

.songlist-container {
    position: relative;
    width: 262.5px;
    height: 250px;
    padding: 0px 26.5px 0px 26.5px;
    margin-top: 20px;
    box-sizing: border-box;
    flex: 0 0 25%;
    .showplay {
        display: block;
        position: absolute;
        right: 36px;
        top: 165px;
        animation: fadeIn .5s ease-in-out;
    }
    a {
        display: block;
        width: 208px;
        height: 207px;
        img {
            width: 208px;
            height: 207px;
        }
        border-radius: 5px 5px 5px 5px;
        overflow: hidden;
        :hover {
            cursor: pointer;
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
        color: #636e72;
        overflow: hidden;
        &:hover {
            color: black;
            cursor: pointer;
        }
    }
    .play-count {
        position: absolute;
        display: flex;
        align-content: center;
        right: 30px;
        height: 32px;
        line-height: 32px;
        top: 5px;
        span{
            display: block;
            height: 26px;
            line-height: 26px;
            color: white;
        }
    }
}
</style>