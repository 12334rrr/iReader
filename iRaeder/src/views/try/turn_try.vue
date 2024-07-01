<script setup>
import { onMounted } from 'vue';
import $ from 'jquery';
import 'turn.js';

onMounted(() => {
  $("#flipbook").turn({
    width: 400,
    height: 300,
    autoCenter: false,
  });

  $('#book').turn({
    acceleration: true, // 是否启动硬件加速 如果为触摸设备必须为true
    pages: 11, // 页码总数
    elevation: 50, // 翻页效果
    height: 200, // 高度 单位 px
    gradients: true, // 是否显示翻页阴影效果
    when: {
      turning: function (e, page, view) {
        // 翻页前触发
      },
      turned: function (e, page) {
        // 翻页后触发
      }
    }
  });
});
</script>

<template>
  <div>
    <div id="flipbook" >
      <div class="hard" style="color:aquamarine"> Turn.js </div>
      <div class=" hard"></div>
      <!-- <div> 
        <p style="color:aquamarine">Page 1</p>
      </div> -->
      <div> Page 2 </div>
      <div> Page 3 </div>
      <div class="hard"></div>
      <div class="hard"></div>
    </div>
  </div>
</template>

<style scoped>
#book {
  width: 90vw;
  margin: 0 auto;
  box-shadow: 0 0 15px #4d4c4c;
  color: "red",
}

#book .turn-page {
  background-color: white;
}

#book .cover {
  background: #333;
}

#book .cover h1 {
  color: white;
  text-align: center;
  font-size: 50px;
  line-height: 500px;
  margin: 0px;
}

#book .loader {
  /* background-image: url(loader.gif); */
  width: 24px;
  height: 24px;
  display: block;
  position: absolute;
  top: 238px;
  left: 188px;
}

#book .data {
  text-align: center;
  font-size: 40px;
  color: #999;
  line-height: 500px;
}

#book .odd {
  background-image: -webkit-linear-gradient(left, #FFF 95%, #ddd 100%);
  background-image: -moz-linear-gradient(left, #FFF 95%, #ddd 100%);
  background-image: -o-linear-gradient(left, #FFF 95%, #ddd 100%);
  background-image: -ms-linear-gradient(left, #FFF 95%, #ddd 100%);
  box-shadow: 0 0 15px #4d4c4c;
}

#book .even {
  background-image: -webkit-linear-gradient(right, #FFF 95%, #ddd 100%);
  background-image: -moz-linear-gradient(right, #FFF 95%, #ddd 100%);
  background-image: -o-linear-gradient(right, #FFF 95%, #ddd 100%);
  background-image: -ms-linear-gradient(right, #FFF 95%, #ddd 100%);
  box-shadow: 0 0 15px #4d4c4c;
}
</style>
