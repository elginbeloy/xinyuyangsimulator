<template>
  <div id="app">
    <router-view/>
    <SideNav />
    <TopNav />
  </div>
</template>

<script>
import SideNav from "@/components/SideNav.vue"
import TopNav from "@/components/TopNav.vue"

export default {
  name: 'App',
  components: {
    SideNav,
    TopNav,
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@200;300;400&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

img {
  pointer-events: none;
  user-select: none;
}

a[href] {
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  text-decoration: none;
}

html, body, #app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: 'Albert Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>