<template>
  <div class="top-nav">
    <div class="indicator">
      <img src="@/assets/money.png" />
      $ {{ this.user.money }}
    </div>
    <div class="indicator">
      <img src="@/assets/money_per_day.png" />
      $ {{ this.user.day }} <span class="tiny-text"> / day </span>
    </div>
    <div class="indicator">
      <img src="@/assets/pretty_happy.png" />
      <span style="color: #24ff42">{{ Math.round(10*this.user.morale) / 10 }}</span>
    </div>
    <div class="indicator">
      <img src="@/assets/calendar.png" />
      Day {{ this.user.day }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>

<style scoped>
.top-nav {
  position: absolute;
  top: 0;
  left: 120px;
  width: calc(100% - 120px);
  height: 100px;

  background-color: #252525;
  box-shadow: 0 0 4px 2px #252525a0;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.indicator {
  position: relative;
  height: 100%;
  width: 20%;

  color: #fff;
  font-size: 32px;
  line-height: 64px;
  font-weight: 200;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.indicator img {
  width: 50px;
  margin-right: 20px;
}

.tiny-text {
  margin-left: 5px;
  font-size: 18px;
  line-height: 64px;
  font-weight: 400;
}
</style>
