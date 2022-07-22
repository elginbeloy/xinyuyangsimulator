<template>
  <div class="shop">
    <div class="pet-container">
      <div  
        v-for="pet in user.pets" 
        class="pet"
        :style="`top: ${pet.x}%; left: ${pet.y}%;`"
        :key="pet.id">
        <img :src="pet.img" :style="`width: ${pet.size}px; height: ${pet.size}px;`" />
      </div>
    </div>
    <div class="header">Homes</div>
    <div class="store-items-container">
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/house_0.jpg" />
        <a class="store-items__cost">$0</a>
        <button 
          @click="buyHouse(0)"
          class="store-items__buy-button bought">
          Bought
        </button>
      </div>
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/house_1.jpg" />
        <a class="store-items__cost">$10K</a>
        <button 
          @click="buyHouse(1)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/house_2.jpg" />
        <a class="store-items__cost">$50k</a>
        <button 
          @click="buyHouse(2)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/house_3.jpg" />
        <a class="store-items__cost">$100k</a>
        <button 
          @click="buyHouse(3)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/house_4.png" />
        <a class="store-items__cost">$250k</a>
        <button 
          @click="buyHouse(4)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/house_5.png" />
        <a class="store-items__cost">$500k</a>
        <button 
          @click="buyHouse(5)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/house_6.png" />
        <a class="store-items__cost">$1M</a>
        <button 
          @click="buyHouse(6)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/house_7.png" />
        <a class="store-items__cost">$5M</a>
        <button 
          @click="buyHouse(7)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/house_8.png" />
        <a class="store-items__cost">$10M</a>
        <button 
          @click="buyHouse(8)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/house_9.png" />
        <a class="store-items__cost">$50M</a>
        <button 
          @click="buyHouse(9)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
    </div>
    <div class="header">Pets</div>
    <div class="store-items-container">
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/dog_0.png" />
        <a class="store-items__cost">$1k</a>
        <button 
          @click="buyDog(0)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/dog_1.png" />
        <a class="store-items__cost">$1k</a>
        <button 
          @click="buyDog(1)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/dog_2.png" />
        <a class="store-items__cost">$1k</a>
        <button 
          @click="buyDog(2)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/dog_3.png" />
        <a class="store-items__cost">$1k</a>
        <button 
          @click="buyDog(3)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/dog_4.png" />
        <a class="store-items__cost">$1k</a>
        <button 
          @click="buyDog(4)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/dog_5.png" />
        <a class="store-items__cost">$1k</a>
        <button 
          @click="buyDog(5)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/dog_6.png" />
        <a class="store-items__cost">$1k</a>
        <button 
          @click="buyDog(6)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/dog_7.png" />
        <a class="store-items__cost">$1k</a>
        <button 
          @click="buyDog(7)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/dog_8.png" />
        <a class="store-items__cost">$1k</a>
        <button 
          @click="buyDog(8)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/dog_9.png" />
        <a class="store-items__cost">$1k</a>
        <button 
          @click="buyDog(9)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/dog_10.png" />
        <a class="store-items__cost">$1k</a>
        <button 
          @click="buyDog(10)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/dog_11.png" />
        <a class="store-items__cost">$1k</a>
        <button 
          @click="buyDog(11)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/dog_12.png" />
        <a class="store-items__cost">$1k</a>
        <button 
          @click="buyDog(12)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/dog_13.png" />
        <a class="store-items__cost">$1k</a>
        <button 
          @click="buyDog(13)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/dog_14.png" />
        <a class="store-items__cost">$1k</a>
        <button 
          @click="buyDog(14)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/dog_15.png" />
        <a class="store-items__cost">$1k</a>
        <button 
          @click="buyDog(15)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/dog_16.png" />
        <a class="store-items__cost">$1k</a>
        <button 
          @click="buyDog(16)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
      <div class="store-items__item">
        <img class="store-items__banner" src="@/assets/dog_17.png" />
        <a class="store-items__cost">$1k</a>
        <button 
          @click="buyDog(17)"
          class="store-items__buy-button">
          Buy
        </button>
      </div>
    </div>
    <div class="header">Travel</div>
    <div class="store-items-container"></div>
    <div class="header">Work</div>
  </div>
</template>

<script>
export default {
  name: 'ShopView',
  data() {
    return {
      user: this.$store.state.user
    };
  },
  methods: {
    buyDog(img) {
      this.$store.commit("buyDog", img);
    },
    buyHouse(houseIndex) {
      this.$store.commit("buyHouse", houseIndex);
    }
  }
}
</script>

<style scoped>
.shop {
  position: absolute;
  top: 100px;
  left: 120px;
  width: calc(100% - 120px);
  height: calc(100% - 100px);
  padding: 40px;

  background-color: #1e2833;
  background-position: center;
  background-size: cover;

  overflow-y: auto;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}

.pet-container {
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: 20px;
  overflow: hidden;

  border-radius: 8px;
  background-color: #000000a0;
  box-shadow: 0 0 4px 1px #000000a0;
}

.pet {
  position: absolute;
  width: auto;
  height: auto;
  cursor: pointer;
}

.pet img {
  filter: drop-shadow(0 3px 3px white);
}

.header {
  position: relative;
  width: 100%;
  color: #fff;
  font-weight: 100;
  font-size: 28px;
  line-height: 56px;
  text-transform: uppercase;
  letter-spacing: 8px;
}

.store-items-container {
  position: relative;
  width: 100%;
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}

.store-items__item {
  position: relative;
  flex-shrink: 0;
  width: 200px;
  height: 300px;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;

  border-radius: 8px;
  background-color: #00000040;
  box-shadow: 0 0 4px 1px #2424ef30;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.store-items__banner {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  filter: drop-shadow(0 3px 3px white);
}

.store-items__cost {
  color: #fff;
  font-weight: 100;
  font-size: 24px;
  line-height: 48px;
}

.store-items__buy-button {
  width: 72px;
  height: 36px;
  margin-left: 10px;
  outline: 0;
  border: 0;
  color: #fff;
  font-family: inherit;
  font-weight: 200;
  font-size: 18px;
  background-color: #2bc48a;
  box-shadow: 0 0 3px 1px #00a36530;
  transition: 0.2s linear all;
  border-radius: 8px;
  cursor: pointer;
}

.store-items__buy-button:hover {
  background-color: #00a365;
  box-shadow: 0 0 4px 1px #00a365a0;
}

.bought, .bought:hover {
  background-color: #0065a3;
  box-shadow: 0 0 4px 1px #0065a3a0;
  cursor: inherit;
}
</style>
