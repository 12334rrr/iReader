<template>
  <div class="login">
    <div ref="vantaRef" class="background">
      <div class="loginBox">
        <div class="email">
          <span class="text">{{ register_text1 }}</span>
          <span style="color: greenyellow;margin: 10px" class="text">Enter your email*</span>
          <div class="accountBox">
            <el-input placeholder="Please input your email" clearable class="accountInput" v-model="email" :prefix-icon="Search"></el-input>
            <el-button type="primary" @click=checkEmail>Continue</el-button>
          </div>
        </div>
        <div class="password">
          <span class="text">{{ register_text1 }}</span>
          <span style="color: greenyellow;margin: 10px" class="text"></span>
          <div class="accountBox">
            <el-input placeholder="Please input your email" clearable class="accountInput" v-model="email" :prefix-icon="Search"></el-input>
            <el-button type="primary" @click=checkEmail>Continue</el-button>
          </div>
        </div>
      </div>
      <div class="emailPrompt" v-if="isShowEmailPrompt">
        <p>Email is invalid or already taken</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import Birds from 'vanta/src/vanta.birds';
import { Search } from '@element-plus/icons-vue'

const isShowPassWord = ref(false)
const isShowEmailPrompt = ref(false)
const email = ref('')

const vantaRef = ref(null);
const vantaEffect = ref(null);

const register_text1 = ref(
    ' Welcome to iReader!\n' + 'Let\'s begin the adventure\n'
);
const checkEmail = () => {
  if(email.value.includes('@')){
    isShowPassWord.value = true;
  }
  else{
    isShowEmailPrompt.vaue = true;
  }
}

onMounted(() => {
  // Initialize Vanta.js effect
  vantaEffect.value = Birds({
    el: vantaRef.value,
    THREE: THREE,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: window.innerHeight,
    minWidth: window.innerWidth,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x040d21,
    color1: 0xc72323,
    color2: 0x26a9c5,
    colorMode: 'variance',
    birdSize: 1.90,
    speedLimit: 4.00,
    alignment: 32.00,
    cohesion: 31.00,
    quantity: 4.00,
    backgroundAlpha: 1.00,
    XOffset: 3.4,
  });
});

onBeforeUnmount(() => {
  // Ensure Vanta.js effect is properly destroyed
  if (vantaEffect.value) {
    vantaEffect.value.destroy();
  }
});
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: linear-gradient(180deg, #0d47a1, #0d47a1 30%, #1b1f36 60%, #1b1f36);;
}

.loginBox {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  left:25%;
  top:25%;
  height: auto;
  padding: 20px;
  width: auto;
  background-color: #0c162d;
  border: gray;
  border-radius: 2%;
}

.text {
  white-space: pre-line;
  color:gray;
  margin: 10px;
  line-height: 2;
  font-family: "JetBrains Mono";
}

.background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1; /* 将背景置于最底层 */
}

.background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Ccircle fill="%23ffffff" cx="50" cy="50" r="1"%3E%3C/circle%3E%3C/svg%3E') repeat;
  opacity: 0.2;
}
.accountBox{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.accountInput{
  margin: 10px 50px 10px 0;
}
.emailPrompt{

}
</style>
