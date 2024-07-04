<script setup>
import {useRoute,useRouter} from "vue-router";
const router = useRouter()
</script>

<template>
  <div class="nav">
    <img src="../assets/images/logo.png" alt="logo" class="logoImg">
    <div>
      <a class="text1" href="/login" @click="router.push('/login')">Already have an account?</a>
      <a class="text2" href="/login"> Sign in →</a>
    </div>
  </div>

</template>

<style scoped>
.logoImg{
  width: 3rem;
  height: 3rem;
  background-color: white;
  border-radius: 100%;
  margin: 10px 10px 10px 10%;
}
.nav{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: baseline;
  justify-content: space-between;
}
.text1{
  font-family: "JetBrains Mono";
  font-size: large;
  color: #e5e7eb;
  margin: 1rem 0 3rem 3rem;
  opacity: 0.7;
  text-decoration:none
}
.text2{
  font-family: "JetBrains Mono";
  font-size: large;
  color: #e5e7eb;
  margin: 1rem 6rem 3rem 0;
  text-decoration:none
}
</style>