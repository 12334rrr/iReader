<template>
  <div class="login">
    <img class='logoImg' src="../../assets/images/logo.png" alt="logo">
    <p class="text">Sign in to iReader</p>
    <div class="loginBox">
      <p class="prompt">Username or email address</p>
      <el-input size="default" placeholder="please input username" class="input"></el-input>
      <div class="passwordBox">
       <p class="prompt">Password</p>
       <a href="/password_reset" class="findPassword">Forget Password?</a>
      </div>
      <el-input size="default" placeholder="please input password" class="input"></el-input>
      <el-button color="#238636" class="signInButton" @click="login">Sign in</el-button>
    </div>
    <div class="registerBox">
      <a class="findPassword">Sign in with a passkey</a>
      <p class="registerText">New to iReader?     <a class="findPassword" href="/register">Create an account</a></p>
    </div>
    <footer>
      <div class="footBox">
        <a class="footText">Terms</a>
        <a class="footText">Privacy</a>
        <a class="footText">Docs</a>
        <a class="footText">Contact iReader Support</a>
        <a class="footText">Manage cookies</a>
        <a class="footText">Do not share my personal information</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";
const router = useRouter()
const login = () => {
  router.push('/home')
}
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
.login{
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}
.logoImg{
  width: 3.5rem;
  height: 3.5rem;
  background-color: white;
  border-radius: 100%;
  margin: 20px 10px 10px 10px;
}
.text{
  font-family: "JetBrains Mono";
  font-size: 1.5rem;
  color: #e5e7eb;
}
.loginBox{
  width:auto;
  height:auto;
  background-color: #161B22;
  border: #0c162d;
  border-radius: 2px;
  padding: 30px;
}
.prompt{
  color: white;
  font-size: 0.8rem;
}

.passwordBox{
  display: flex;
  flex-direction: row;
  align-content: space-between;
  justify-content: space-between;
  align-items: baseline;
}
.findPassword{
  color: #3b82f6;
  font-size: 0.8rem;
  text-decoration:none
}
.signInButton{
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
}
.registerBox{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  margin: 10px;
  width: auto;
  height: auto;
  border: #0c162d;
  border-radius: 3px;
  padding: 30px;
}
.registerText{
  color: #e5e7eb;
  font-size: 0.8rem;
  margin: 0 10px 0 10px;
  white-space: pre-line;
}
.footBox{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 50px 0 30px 0 ;
}
.footText{
  color: white;
  font-size: 0.8rem;
  margin: 10px;
  opacity: 0.7;
}
</style>