<template>
    <div class="pb-3 border-b divide-black divide-opacity-45">
        <div class="searchmore pl-7">
            <input class="h-8 w-52 border rounded-full border-red-200 outline-none pl-3"
              @input="setKeyword($event)"
              placeholder="搜索"/>
            <i class="material-icons" @click="toSearch(keyword)">search</i>
        </div>
        <div class="account">
            <i class="material-icons">notifications_none</i>
            <img class="avatar" @click="loginPage()" :src=userhead />
        </div>

        <el-dialog
          title="扫 描 二 维 码 登 录"
          :visible.sync="dialogVisible"
          width="30%"
          :mask=false
          :before-close="handleClose"
          >
          <div class="login-page">
            <img src="https://patchwiki.biligame.com/images/blhx/f/f6/ehb9u3532mjbbl66his9ngs70b87ni6.png" />
            <img :src=qrimg />
            <img src="https://patchwiki.biligame.com/images/blhx/f/f6/ehb9u3532mjbbl66his9ngs70b87ni6.png" />
          </div>
          <span class="tip">二维码还有:<span class="second">{{ totalTime }}</span>秒过期喵ヽ(=^･ω･^=)丿</span>
        </el-dialog>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
      return {
        dialogVisible: false,
        unikey: "",
        qrimg: "",
        totalTime: 180,
        flag: false,
        userhead: "",
        keyword: ""
      };
    },
    created() {
      if(localStorage.getItem("Cookie")) {
        this.setUserinfo(localStorage.getItem("Cookie"))
      } else {
        this.userhead = "https://z3.ax1x.com/2021/07/24/W6HB2F.png"
      }
    },
    methods: {
      // 用户点击打开登录页
      loginPage() {
        const _this = this
        this.dialogVisible = true
        this.clock = setInterval(() => {
          _this.totalTime--
          // 检测当前二维码扫描情况
          if( _this.flag ) {
            axios.get("http://localhost:3000/login/qr/check", { params: {
              key: _this.unikey,
              time : new Date().getTime() 
            } })
            .then(function(response) {
              if( response.data.code === 803 ) {
                  localStorage.setItem("Cookie", response.data.cookie)
                  _this.$message({
                    showClose: true,
                    message: "登陆成功喵ヽ(✿ﾟ▽ﾟ)ノ ",
                    type: "success"
                  })
                  _this.dialogVisible = false
                  clearInterval(_this.clock)
              } else {
                console.log("扫码扫码扫码扫码扫码扫码")
              }
            })
            .catch(function(err) {
              console.log(err)
            })
          }
          if( _this.totalTime <= 0 ) {
            _this.clearInterval(clock)
          }
        }, 1000)
        // 请求登录key值
        axios.get("http://localhost:3000/login/qr/key", { params: {
          time : new Date().getTime() 
        } })
        .then(function(response) {
          _this.unikey = response.data.data.unikey
          // 请求获取二维码当前状态
          axios.get("http://localhost:3000/login/qr/create", { params: {
            key: _this.unikey,
            qrimg: true
          } })
          .then(function(response) {
            _this.qrimg = response.data.data.qrimg
            _this.flag = true
          })
          .catch(function(err) {
            console.log(err)
          })
        })
        .catch(function(err) {
          console.log(err)
        })

      },
      // 关闭登陆界面操作
      handleClose(done) {
        done()
        clearInterval(this.clock)
      },

      // 传入登陆成功返回的cookie进行用户信息的查询
      setUserinfo(cookie) {
        const _this = this
        axios.get("http://localhost:3001/api/wyuserinfo", { params: {
          cookie
        } })
        .then(function(response) {
          _this.userhead = response.data.profile.avatarUrl
          localStorage.setItem("bgImg", response.data.profile.backgroundUrl)
          localStorage.setItem("ID", response.data.account.id)
          // 设置用户背景图片作为网页主背景
          document.body.style.background = "url(" + response.data.profile.backgroundUrl + ")"
          document.body.style.backgroundRepeat = "no-repeat"
          document.body.style.backgroundSize = "cover"
        })
        .catch(function(err) {
          console.log(err)
        })
      },

      // 获取用户在搜索框输入的信息
      setKeyword(event) {
        this.keyword = event.currentTarget.value
      },

      // 用户点击搜索
      toSearch(keyword) {
        this.$router.push({
          path: '/Search',
          query: {
            keyword
          }
        })
      }
    }
}
</script>

<style lang="scss">
.searchmore {
  position: relative;
  margin-top: 15px;
  display: flex;
  align-items: center;
  i {
    position: absolute;
    left: 200px;
    &:hover {
      color: #54a0ff;
      cursor: pointer;
    }
  }
}

.account {
  position: absolute;
  top: 10px;
  right: 20px;
  display: flex;
  align-items: center;
}
.second {
  color: #0984e3;
}
.tip {
  font-size: 16px;
}
.avatar:hover {
  cursor: pointer;
}
.v-modal {
  display: none;
}
</style>