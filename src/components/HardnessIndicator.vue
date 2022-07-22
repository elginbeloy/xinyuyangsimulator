<template>
  <div class="hardness-indicator">
    <div class="bar bar-one"></div>
    <div class="bar bar-two" v-if="hardness > 1"></div>
    <div class="bar bar-three" v-if="hardness > 2"></div>
    <div class="bar bar-four" v-if="hardness > 3"></div>
    <div class="bar bar-five" v-if="hardness > 4"></div>
  </div>
</template>

<script>
export default {
  name: 'SideNav',
  props: {
    hardness: Number,
  }
}
</script>

<style scoped>
.hardness-indicator {
  position: relative;
  margin-left: auto;
  width: 100px;
  height: 40px;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
}

.bar {
  width: 4px;
  margin-right: 6px;
  margin-left: 6px;
  border-radius: 2px;
}

.bar-one {
  height: 8px;
  background-color: rgb(30, 220, 30);
  box-shadow: 0 0 3px 1px rgba(30, 220, 30, 0.6);
}

.bar-two {
  height: 16px;
  background-color: rgb(120, 180, 30);
  box-shadow: 0 0 3px 1px rgba(120, 180, 30, 0.6);
}

.bar-three {
  height: 24px;
  background-color: rgb(225, 200, 10);
  box-shadow: 0 0 3px 1px rgba(225, 200, 10, 0.6);
}

.bar-four {
  height: 32px;
  background-color: rgb(255, 55, 5);
  box-shadow: 0 0 3px 1px rgba(255, 55, 5, 0.6);
}

.bar-five {
  height: 40px;
  background-color: rgb(255, 0, 0);
  box-shadow: 0 0 3px 1px rgba(255, 0, 0, 0.6);
}
</style>
