<template>
  <div role="alert" class="alert alert-success">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
    >
      <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 0 0 0118 0z"
      />
    </svg>
    <span><slot></slot></span>
  </div>
</template>

<script setup>
// 你可以在这里添加组件逻辑，如果有需要的话
</script>

<style scoped>
.alert {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.375rem;
  background-color: #d1fae5; /* 绿色背景 */
  color: #065f46; /* 绿色文本 */
}

.alert-success {
  border: 1px solid #10b981; /* 绿色边框 */
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
