<template>
  <div class="login">
    <div ref="vantaRef" class="background">
      <div class="loginBox">
        <p>
          Welcome to iReader!
          Let's begin the adventure
          Welcome to iReader!
        </p>

      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue';
import * as THREE from 'three';
import Birds from "vanta/src/vanta.birds";

const vantaRef = ref(null);
const vantaEffect = ref(null);

onMounted(() => {
  vantaEffect.value = Birds({
    el: vantaRef.value,
    THREE: THREE,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x040D22,
    color1: 0xc72323,
    color2: 0x26a9c5,
    birdSize: 1.20,
    speedLimit: 4.00,
    quantity: 4.00
  });
});
</script>

<style scoped>
.background {
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #6a0dad, #000000); /* 线性渐变从紫色到黑色 */
  background-size: 400% 400%; /* 背景大小，使渐变效果更加平滑 */
  animation: gradientAnimation 10s ease infinite; /* 渐变动画，无限循环 */

  @keyframes gradientAnimation {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0 0;
    }
  }
}
.loginBox{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background: linear-gradient(135deg, #6a0dad, #000000); /* 线性渐变从紫色到黑色 */
  background-size: 400% 400%; /* 背景大小，使渐变效果更加平滑 */
  animation: gradientAnimation 10s ease infinite; /* 渐变动画，无限循环 */

  @keyframes gradientAnimation {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0 0;
    }
  }
}
</style>