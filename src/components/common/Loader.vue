<template>
  <div class="loader">
    <span v-for="(color, i) in colors" :key="i" class="dot" :style="{ background: color, animationDelay: `${i * 0.15}s` }"></span>
  </div>
</template>

<script>
export default {
  name: "Loader",
  data() {
    return {
      colors: [
        "#e57373", 
        "#64b5f6",
        "#81c784", 
        "#ffd54f", 
        "#ba68c8",
        "#4dd0e1",
        "#ffb74d", 
        "#a1887f"
      ]
    };
  }
};
</script>

<style scoped>
.loader {
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dot {
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: loader-spin 1.2s linear infinite;
}

.dot:nth-child(1) { transform: rotate(0deg)   translate(25px) scale(1); }
.dot:nth-child(2) { transform: rotate(45deg)  translate(25px) scale(1); }
.dot:nth-child(3) { transform: rotate(90deg)  translate(25px) scale(1); }
.dot:nth-child(4) { transform: rotate(135deg) translate(25px) scale(1); }
.dot:nth-child(5) { transform: rotate(180deg) translate(25px) scale(1); }
.dot:nth-child(6) { transform: rotate(225deg) translate(25px) scale(1); }
.dot:nth-child(7) { transform: rotate(270deg) translate(25px) scale(1); }
.dot:nth-child(8) { transform: rotate(315deg) translate(25px) scale(1); }

@keyframes loader-spin {
  0%   { opacity: 1; }
  80%  { opacity: 0.3; }
  100% { opacity: 1; }
}
</style>