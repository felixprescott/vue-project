<template>
  <div class="spinner"></div>
</template>

<style scoped>
.spinner {
  pointer-events: none;
  width: 40px;
  height: 40px;
  border: 3px solid transparent;
  border-color: #2a2f45;
  border-top-color: #FFF;
  border-radius: 50%;
  animation: loadingspin 1s linear infinite;
}

@keyframes loadingspin {
  100% {
    transform: rotate(360deg)
  }
}
</style>
