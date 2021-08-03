 <template>
   <div class="comment-container">
      <span class="titile">最新评论</span>

      <!--  v-infinite-scroll="load" -->
      <ul class="infinite-list"  infinite-scroll-distance="10" infinite-scroll-immediate="true">

        <li class="infinite-list-item" v-for="comment in comments" :key="comment.commentId">
            <div class="comment-right">
                <a>
                  <img :src=comment.user.avatarUrl />
                </a>
            </div>
            <div class="comment-left">
              <div class="comment-info">
                  <span class="user-name">{{ comment.user.nickname }}:</span>
                  <span class="comment">{{ comment.content }}</span>
              </div>
            <span class="comment-time">{{ comment.time | dateFormatdetailed }}</span>
            </div>
        </li>

      </ul>
   </div>
 </template>
 
 <script>
import axios from 'axios'
 export default {
      name: "Comment",
      props: ["id"],
      data() {
        return {
          comments: []
        }
      },
      created() {
        const _this  = this
        let { id } = this.$props
        axios.get("http://localhost:3000/comment/playlist", { params: {
          id
        } })
        .then(function(response) {
          _this.comments = response.data.comments
        })
        .catch(function(err) {
          console.log(err)
        })
      }
 }
 </script>
 
 <style lang="scss" scoped>
 ul, li {
   list-style: none;
   padding: 0px;
   margin: 0px;
 }
 .comment-container{
    width: 100%;
    height: 500px;
 }
 .titile {
   display: block;
    width: 100%;
    text-align: left;
 }
 .songlist-container {
    width: 100%;
    padding-bottom: 100px;
    margin-left: -30px;
  }
 .infinite-list-item {
    height: 80px;
    display: flex;
    margin-top: 10px;
    width: 90%;
    border-bottom: 1px solid #b2bec3;
    span {
        line-height: 35px;
        display: block;
    }
    .comment-right {
      height: 80px;
      width: 50px;
      padding: 10px 5px 0px 5px;
      a {
        display: block;
        width: 40px;
        height: 40px;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50px;
        }
      }
    }
    .comment-left {
      padding-left: 20px;
      height: 80px;
      width: calc(100% - 50px);
      .comment-info {
        display: flex;
      } 
      .comment-time {
        display: block;
        text-align: left;
        margin-top: -10px;
      }
    }
}
 </style>