<template>
  <div class="banner-container">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="(item, index) in banner" :key="index">
            <div class="medium" :style="{background:'url(' + item.imageUrl +')' }" ></div>
        </el-carousel-item>
      </el-carousel>
  </div>
</template>

<script>
export default {
    name: 'swiper',
    props: ['banner']
}
</script>

<style>
.banner-container {
    width: 70%;
    margin: auto;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
  
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
  
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}  

.medium {
  width: 100%;
  height: 100%;
  background-size: 100% 100%!important;
  border-radius: 10px 10px 10px 10px;
}

.swiper {
  height: 100px;
}

@media screen and (max-width: 520px){
  .el-carousel__container {
    height: 80px!important;
  }
  .el-carousel__button {
    width: 5px!important;
  }
}
</style>