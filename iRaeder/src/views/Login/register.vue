<template>
  <div class="login">
    <div  ref="vantaRef"  class="background">
      <div>
            <nav_register></nav_register>
      </div>
      <div class="loginBox">
        <div class="email">
          <p class="typing">{{ register_text }}</p>
          <p class="prompt">Enter your email*</p>
          <div class="accountBox">
            <el-icon v-if="isShowPassWord===false" class="icon"><Right /></el-icon>
            <el-icon v-else class="icon-check"><Check /></el-icon>
            <el-input placeholder="Please input your email" class="accountInput" size="large" v-model="email" :prefix-icon="Lock"></el-input>
            <el-button type="primary" @click="checkEmail">Continue</el-button>
          </div>
        </div>
        <div class="password" v-if="isShowPassWord">
          <p class="prompt">Enter your password*</p>
          <div class="accountBox">
            <el-icon v-if="passwordRange === -1 || password==='' " class="icon"><Right /></el-icon>
            <el-icon v-else-if="passwordRange>=0 && passwordRange<=1" class="icon-err"><Close /></el-icon>
            <el-icon v-else class="icon-check"><Check /></el-icon>
            <el-input placeholder="Please input your password" type="password" class="accountInput" size="large" v-model="password" :prefix-icon="Lock"></el-input>
            <el-button type="primary" @click="checkPassword">Continue</el-button>
          </div>
        </div>
        <div class="username" v-if="isShowUsername">
          <p class="prompt">Enter your username*</p>
          <div class="accountBox">
            <el-icon v-if="username===''" class="icon"><Right /></el-icon>
            <el-icon v-else-if="registerSuccess===true" class="icon-check"><Check /></el-icon>
            <el-icon v-else class="icon-err"><Close /></el-icon>
            <el-input placeholder="Please input your password" type="password" class="accountInput" size="large" v-model="username" :prefix-icon="User"></el-input>
            <el-button type="primary" @click="gotoLogin">Continue</el-button>
          </div>
        </div>
      </div>
      <div class="emailPrompt" v-if="isShowEmailPrompt===true" >
        <p>Email is invalid or already taken</p>
      </div>
      <div class="passwordPrompt" v-if="isShowUsername===false && isShowPassWord === true">
        <p :style="{ color: passwordRange.value > 2 ? 'green' : 'red' }">{{ passwordPrompt }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted,computed } from 'vue';
import * as THREE from 'three';
import Birds from 'vanta/src/vanta.birds';
import {Lock, User, Check, Right, Close} from '@element-plus/icons-vue'
import nav_register from '../../components/Nav/nav_register.vue'
import {ElMessage} from "element-plus";
import router from "../../router/index.js";

const isShowPassWord = ref(false);
const isShowEmailPrompt = ref(false);
const isShowUsername = ref(false);
const email = ref('');
const password = ref('');
const username = ref('');
const passwordRange = ref(-1);
const registerSuccess = ref(false)

const passwordPrompt = computed(() => {
  if (passwordRange.value === 1 || passwordRange.value === 2) {
    return 'Password is too short';
  } else if (passwordRange.value === 3 || passwordRange.value === 4) {
    return 'Password is too strong';
  } else {
    return '';
  }
});

const vantaRef = ref(null);
const vantaEffect = ref(null);

const register_text = ref(
    ' Welcome to iReader!\n' +
    'Let us begin the adventure\n'
);

const checkEmail = () => {
  if(email.value.includes('@')){
    isShowPassWord.value = true;
    isShowEmailPrompt.value = false;
  } else {
    isShowEmailPrompt.value = true;
  }
  console.log('checkEmail is called ' + isShowEmailPrompt.value + isShowPassWord.value);
}

const patterns = {
  weak: /^.{1,5}$/,          // 弱密码：少于等于5个字符
  medium: /^.{6,20}$/,       // 中等密码：6到10个字符
  strong: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{11,20}$/, // 强密码：包含数字、小写字母、大写字母和特殊字符，11到20个字符
  veryStrong: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{21,}$/ // 超强密码：包含数字、小写字母、大写字母和特殊字符，21个字符以上
};
const checkPassword = () => {
  console.log(password.value);
  if (patterns.veryStrong.test(password.value)) {
    passwordRange.value = 4;
  } else if (patterns.strong.test(password.value)) {
    passwordRange.value = 3;
  } else if (patterns.medium.test(password.value)) {
    passwordRange.value = 2;
  } else if (patterns.weak.test(password.value)) {
    passwordRange.value = 1;
  } else {
    passwordRange.value = 0; // 未知情况，可以根据需要定义
  }
  console.log('Register views checkPassword is called' + passwordRange.value + '\n');
  isShowUsername.value = passwordRange.value >= 2 && passwordRange.value <= 4;
}

const gotoLogin = () => {
  if (username.value === '') {
    ElMessage.success('Sorry, username could be empty'); // 显示成功消息
  } else {
    registerSuccess.value = true; // 设置注册成功状态
    ElMessage.success('Register successfully'); // 显示成功消息
    router.push('/login'); // 跳转到登录页面
  }
};

onMounted(() => {
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
    birdSize: 1.50,
    speedLimit: 4.00,
    alignment: 32.00,
    cohesion: 31.00,
    quantity: 4.00,
    backgroundAlpha: 1.00,
    XOffset: 3.4,
  });
});

</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
}

.loginBox {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  width: 26rem;
  height: auto;
  left:35%;
  top:6%;
  background-color: #0c162d;
  border: gray;
  border-radius: 2%;
}
.background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.accountBox{
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 400px;
}
.accountInput{
  margin: 10px 50px 10px 0;
  width: 1000px;
}
.email{
  width: 30%;
}
.emailPrompt{
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;

  p{
    width: 30rem;
    white-space: pre-line;
    color: #e5e7eb;
    line-height: 1.8;
    font-family: "JetBrains Mono";
    margin: 30px 30px 30px 80px;
  }
}
.prompt{
  color: deepskyblue;
  margin: 30px 10px 10px 0;
  width: 30rem;
}
.icon{
  color: purple;
  margin: 10px;
}
.icon-check{
  color: greenyellow;
  margin: 10px;
}
.icon-err{
  color: red;
  margin: 10px;
}
.soft{
  color: green;
}
.danger{
  color: red;
}
.passwordPrompt{
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;

  p{
    width: 30rem;
    white-space: pre-line;
    color: #e5e7eb;
    line-height: 1.8;
    font-family: "JetBrains Mono";
    margin: 30px 30px 30px 80px;
  }
}
.typing {
  width: 26rem;
  white-space: nowrap;
  color: #e5e7eb;
  line-height: 1.8;
  font-family: "JetBrains Mono";
  border-right: 2px solid transparent;
  animation: typing 3.5s steps(15, end), blink-caret .50s step-end infinite;
  overflow: hidden;
}
/* 打印效果 */
@keyframes typing {
  from { width: 0; }
  to { width: 15em; }
}
/* 光标闪啊闪 */
@keyframes blink-caret {
  from, to { opacity: 1; }
  50% { opacity: 1; }
  to { opacity: 0; } /* 结束时保持消失状态 */
}
</style>
