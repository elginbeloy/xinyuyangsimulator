<template>
  <div class="home" :style="`background-image: url('${currentHouse.image}');`">
    <div class="background-overlay"></div>
    <div class="title-container">
      <a class="title">{{ currentHouse.name }}</a>
      <a class="subtitle">${{ currentHouse.cost }}</a>
    </div>
    <div class="house-selector">
      <div 
        class="house-selector__house" 
        v-for="house in user.houses" 
        :key="house.id"
        @click="equipHouse(house.id)">
        <img :src="house.image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      user: this.$store.state.user
    };
  },
  computed: {
    currentHouse() {
      return this.user.houses[this.user.currentHouse];
    }
  },
  methods: {
    equipHouse(houseId) {
      this.$store.commit("equipHouse", houseId);
    }
  }
}
</script>

<style scoped>
.home {
  position: absolute;
  top: 100px;
  left: 120px;
  width: calc(100% - 120px);
  height: calc(100% - 100px);

  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000A0;
}

.title-container {
  position: absolute;
  top: 50px;
  right: 50px;

  text-align: right;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
}

.title-container .title {
  font-size: 62px;
  font-weight: 100;
  color: #fff;
}

.title-container .subtitle {
  font-size: 32px;
  line-height: 64px;
  color: #fffffff0;
}

.house-selector {
  position: absolute;
  bottom: 20px;
  left: 0%;
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.house-selector__house {
  position: relative;
  width: auto;
  height: 70px;
  margin-left: 20px;
  overflow: hidden;

  border-radius: 8px;
  border: 1px solid #2424efa0;
  box-shadow: 0 0 6px 2px #2424ef30;
  transition: 0.2s linear all;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
}

.house-selector__house:hover {
  border: 1px solid #2424ef;
  box-shadow: 0 0 6px 2px #2424ef;
}

.house-selector__house img {
  width: auto;
  height: 100%;
}
</style>
