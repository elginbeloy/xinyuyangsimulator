<template>
  <div class="side-nav">
    <div class="title-container">
      <img src="@/assets/logo.png" />
      <a><span style="color: red">XY</span>S</a>
    </div>
    <div class="nav-option" :class="{'active-nav-option': $route == 'home'}">
      <router-link to="/">
        <img src="@/assets/home.png" />
      </router-link>
    </div>
    <div class="nav-option" :class="{'active-nav-option': $route == 'work'}">
      <router-link to="work">
        <img src="@/assets/work.png" />
      </router-link>
    </div>
    <div class="nav-option" :class="{'active-nav-option': $route == 'shop'}">
      <router-link to="shop">
        <img src="@/assets/shop.png" />
      </router-link>
    </div>
    <div class="nav-option" :class="{'active-nav-option': $route == 'travel'}">
      <router-link to="travel">
        <img src="@/assets/travel.png" />
      </router-link>
    </div>
    <div class="nav-option" :class="{'active-nav-option': $route == 'awards'}">
      <router-link to="awards">
        <img src="@/assets/awards.png" />
      </router-link>
    </div>
    <div class="nav-option" :class="{'active-nav-option': $route == 'settings'}">
      <router-link to="settings">
        <img src="@/assets/settings.png" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideNav',
}
</script>

<style scoped>
.side-nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 120px;
  height: 100%;

  background-color: #252525;
  box-shadow: 0 0 4px 2px #252525a0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}


.title-container {
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 20px;
  margin-bottom: 40px;

  font-size: 32px;
  letter-spacing: 6px;
  color: #fff;
  font-weight: 100;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title-container img {
  width: 100%;
  margin-bottom: 10px;
  -webkit-box-reflect: below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.1), rgba(0,0,0,0.2));
}

.nav-option {
  position: relative;
  padding: 10px;
  width: auto;
  height: auto;
  margin-bottom: 10px;

  border: 2px solid #ffffff00;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.5s linear all;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.nav-option img {
  position: relative;
  width: 40px;
}

.active-nav-option, .nav-option:hover {
  border: 2px solid #ffffff;
  background-color: rgba(0,0,120,0.2);
}
</style>
