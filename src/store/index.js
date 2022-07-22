import Vue from 'vue'
import Vuex from 'vuex'

// Dog images
import dogImgZero from "@/assets/dog_0.png"
import dogImgOne from "@/assets/dog_1.png"
import dogImgTwo from "@/assets/dog_2.png"
import dogImgThree from "@/assets/dog_3.png"
import dogImgFour from "@/assets/dog_4.png"
import dogImgFive from "@/assets/dog_5.png"
import dogImgSix from "@/assets/dog_6.png"
import dogImgSeven from "@/assets/dog_7.png"
import dogImgEight from "@/assets/dog_8.png"
import dogImgNine from "@/assets/dog_9.png"
import dogImgTen from "@/assets/dog_10.png"
import dogImgEleven from "@/assets/dog_11.png"
import dogImgTwelve from "@/assets/dog_12.png"
import dogImgThirteen from "@/assets/dog_13.png"
import dogImgFourteen from "@/assets/dog_14.png"
import dogImgFifteen from "@/assets/dog_15.png"
import dogImgSixteen from "@/assets/dog_16.png"
import dogImgSeventeen from "@/assets/dog_17.png"

// House images 
import houseImgZero from "@/assets/house_0.jpg"
import houseImgOne from "@/assets/house_1.jpg"
import houseImgTwo from "@/assets/house_2.jpg"
import houseImgThree from "@/assets/house_3.jpg"
import houseImgFour from "@/assets/house_4.png"
import houseImgFive from "@/assets/house_5.png"
import houseImgSix from "@/assets/house_6.png"
import houseImgSeven from "@/assets/house_7.png"
import houseImgEight from "@/assets/house_8.png"
import houseImgNine from "@/assets/house_9.png"

Vue.use(Vuex)

const dogImages = [
  dogImgZero,
  dogImgOne,
  dogImgTwo,
  dogImgThree,
  dogImgFour,
  dogImgFive,
  dogImgSix,
  dogImgSeven,
  dogImgEight,
  dogImgNine,
  dogImgTen,
  dogImgEleven,
  dogImgTwelve,
  dogImgThirteen,
  dogImgFourteen,
  dogImgFifteen,
  dogImgSixteen,
  dogImgSeventeen
];

const houses = [
  { id: "house_0", name: "Starter House", cost: 0, image: houseImgZero },
  { id: "house_1", name: "Family Home", cost: 10000, image: houseImgOne },
  { id: "house_2", name: "Lake View Home", cost: 50000, image: houseImgTwo },
  { id: "house_3", name: "Modern Mansion House", cost: 100000, image: houseImgThree },
  { id: "house_4", name: "Cabin Mansion", cost: 250000, image: houseImgFour },
  { id: "house_5", name: "Secluded Cabin Estate", cost: 500000, image: houseImgFive },
  { id: "house_6", name: "City Home", cost: 1000000, image: houseImgSix },
  { id: "house_7", name: "California Mansion", cost: 5000000, image: houseImgSeven },
  { id: "house_8", name: "L.A Super Mansion", cost: 10000000, image: houseImgEight },
  { id: "house_9", name: "Castle", cost: 50000000, image: houseImgNine },
]

const levels = [
  { experienceRequired: 0, name: "L3 Engineer" },
  { experienceRequired: 5, name: "L4 Engineer" },
  { experienceRequired: 10, name: "L5 Engineer" },
  { experienceRequired: 25, name: "L6 Engineering Manager" },
  { experienceRequired: 50, name: "Nest Director" },
  { experienceRequired: 100, name: "Nest Vice President" },
  { experienceRequired: 250, name: "Nest Senior Vice President" },
  { experienceRequired: 500, name: "Nest CEO" },
  { experienceRequired: 1000, name: "YouTube CEO" },
  { experienceRequired: 2500, name: "Google CEO" },
  { experienceRequired: 5000, name: "Alphabet CEO" },
  { experienceRequired: 10000, name: "Lord Xinyu" },
];

export default new Vuex.Store({
  state: {
    user: {
      money: 100000000,
      moneyPerDay: 0,
      day: 1,
      morale: 8.0,
      levelName: "L3 Engineer",
      experience: 0,
      pets: [],
      houses: { "house_0": houses[0]},
      currentHouse: "house_0"
    }
  },
  mutations: {
    work(state, hardness) {
      state.user.money += hardness * 100;
      state.user.experience += hardness;
      state.user.morale -= 0.1;
      state.user.day += 1;
      levels.forEach((level) => {
        if (state.user.experience >= level.experienceRequired) {
          state.user.levelName = level.name;
        }
      })
    },
    buyDog(state, imgIndex) {
      if (state.user.money >= 1000) {
        state.user.money -= 1000;
        const id = state.user.pets.length;
        const size = Math.round(30 + Math.random() * 40);
        const x = Math.round(Math.random() * 88);
        const y = Math.round(Math.random() * 88);
        state.user.pets.push({ id, x, y, size, img: dogImages[imgIndex] });
      }
    },
    buyHouse(state, houseIndex) {
      const house = houses[houseIndex];
      if (state.user.money >= house.cost) {
        state.user.money -= house.cost;
        state.user.houses[house.id] = house;
        state.user.currentHouse = house.id;
      }
    },
    equipHouse(state, houseId) {
      state.user.currentHouse = houseId;
    },
  },
  actions: {
  },
})