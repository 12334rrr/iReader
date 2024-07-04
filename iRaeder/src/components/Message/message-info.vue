<template>
  <div role="alert" class="alert alert-info">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="h-6 w-6 shrink-0 stroke-current"
    >
      <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
    <span><slot></slot></span>
  </div>
</template>

<script setup>
// 可以添加组件逻辑，如果有需要的话
</script>

<style scoped>
.alert {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.375rem;
  background-color: #dbeafe; /* 蓝色背景 */
  color: #3b82f6; /* 蓝色文本 */
}

.alert-info {
  border: 1px solid #93c5fd; /* 蓝色边框 */
}

.h-6 {
  height: 1.5rem;
}

.w-6 {
  width: 1.5rem;
}

.shrink-0 {
  flex-shrink: 0;
}

.stroke-current {
  stroke: currentColor;
}

svg {
  margin-right: 0.5rem;
}

span {
  font-size: 1rem;
  line-height: 1.5;
}
</style>
