<template>
  <div class="work">
    <div class="computer">
      <div class="computer-top-window">
        <div class="button green"></div>
        <div class="button yellow"></div>
        <div class="button red"></div>
      </div>
      <div class="buganizer">
        <div class="level">
          {{ user.levelName }}
        </div>
        <div class="buganizer__title">
          <img src="@/assets/buganizer.jpeg" />
          buganizer
        </div>
        <div 
          v-for="issue in buganizerIssues"
          :key="issue.id"
          class="buganizer__issue"  
          :class="{'buganizer__issue--selected': issue.selected}"
          @click="selectIssue(issue)">
          <span>P{{ 5 - issue.hardness }}</span>
          <span>{{ issue.title }}</span>
          <HardnessIndicator :hardness="issue.hardness" />
        </div>
      </div>
      <div 
        class="coder"
        v-if="issueSelected"
        @mousedown="startCoding" 
        @mouseup="stopCoding"
        :class="{'blue-background': coding}">
        <div class="error" v-if="error">error</div>
        <div class="completed" v-if="completed">complete</div>
        <div 
          v-if="coding" 
          class="code-container" 
          :style="`width: ${codeSize}%; height: ${codeSize}%;`">
          <div class="code-container__overlay" v-if="codeSize != 100"></div>
          {{ codeSize }}%
        </div>
        <span v-if="!coding">Click To Code</span>
      </div>
      <div class="elgin-loves-xinyu">
        Elgin <span style="color: #ff0000;">♥</span> Xinyu OS
      </div>
    </div>
  </div>
</template>

<script>
import HardnessIndicator from "@/components/HardnessIndicator.vue"

const buganizerIssues = [
  {selected: false, title: "User says it doesnt work", speed: 2, wait: 50, hardness: 1},
  {selected: false, title: "Ok Google, Make A Bug", speed: 2, wait: 50, hardness: 1},
  {selected: false, title: "PM needs this done >:(", speed: 2, wait: 30, hardness: 2},
  {selected: false, title: "UX needs this done >:(", speed: 2, wait: 30, hardness: 2},
  {selected: false, title: "Uh oh error uwu helpy me", speed: 5, wait: 30, hardness: 3},
  {selected: false, title: "My nest called 911 on me", speed: 5, wait: 30, hardness: 3},
  {selected: false, title: "My Google Being Stupid. Why?", speed: 5, wait: 20, hardness: 4},
  {selected: false, title: "Production Error! SOS!", speed: 5, wait: 10, hardness: 5},
  {selected: false, title: "Some OnCall Prod Bug Uh Oh", speed: 10, wait: 20, hardness: 5},
];

export default {
  name: 'WorkView',
  components: {
    HardnessIndicator,
  },
  mounted() {
    const state = this;
    setInterval(function() {
      state.issueCounter += 1;
      state.buganizerIssues.push(
        {
          id: state.issueCounter, 
          ...buganizerIssues[Math.floor(Math.random()*buganizerIssues.length)]
        }
      );
    }, 10000);
  },
  data() {
    return {
      user: this.$store.state.user,
      issueCounter: 2,
      coding: false,
      completed: false,
      error: false,
      codeSize: 0.0,
      buganizerIssues: [
        {id: 0, selected: false, title: "User says it doesnt work", speed: 1, wait: 100, hardness: 1},
        {id: 1, selected: false, title: "PM needs this done >:(", speed: 2, wait: 80, hardness: 2},
      ]
    };
  },
  computed: {
    issueSelected() {
      return this.buganizerIssues.filter((issue) => issue.selected).length > 0;
    },
    selectedIssue() {
      return this.buganizerIssues.filter((issue) => issue.selected)[0];
    }
  },
  methods:{
    selectIssue: function(issueToSelect) {
      let isSelected = issueToSelect.selected;
      this.buganizerIssues.forEach((issue) => issue.selected = false);
      if (isSelected) {
        issueToSelect.selected = false;
      } else {
        issueToSelect.selected = true;
      }
    },
    startCoding: function() {
      if (this.error) {
        this.error = false;
        this.codeSize = 0;
        clearInterval(this.coding);
        this.coding = false;
      } else if (this.completed) {
        const selectedIssue = this.selectedIssue;
        this.completed = false;
        this.codeSize = 0;
        this.$store.commit("work", selectedIssue.hardness);
        for (let i = 0; i < this.buganizerIssues.length; i++) {
          if (this.buganizerIssues[i].selected == true) {
            this.buganizerIssues.splice(i, 1);
            break;
          }
        }
      } else {
        const selectedIssue = this.selectedIssue;
        const state = this;
        this.coding = setInterval(function() {
          state.codeSize += selectedIssue.speed;
          if (state.codeSize > 100) {
            state.error = true;
          }
        }, selectedIssue.wait);
      }
    },
    stopCoding: function() {
      clearInterval(this.coding);
      this.coding = true;
      if (this.codeSize == 100) {
        this.completed = true;
      }
    }
  }
}
</script>

<style scoped>
.work {
  position: absolute;
  top: 100px;
  left: 120px;
  width: calc(100% - 120px);
  height: calc(100% - 100px);

  background-color: #1e2833;
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
}

.computer {
  position: relative;
  width: 80%;
  height: 80%;
  border-radius: 8px;
  background-color: #151b1e;
  box-shadow: 0 0 8px 2px #006be180;
  overflow: hidden;
}

.computer-top-window {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 24px;
  background-color: #ffffff40;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.button {
  position: relative;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin-left: 10px;
}

.red {
  background-color: #df6961;
}

.yellow {
  background-color: #f2bc57;
}

.green {
  background-color: #6bb358;
}

.elgin-loves-xinyu {
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-size: 14px;
  font-weight: 100;
  color: #fff;
}

.buganizer {
  position: absolute;
  top: calc(5% + 24px);
  left: 5%;
  width: 40%;
  height: calc(90% - 48px);
  padding: 20px;

  background-color: #fff;
  border-radius: 8px;
  overflow-x: hidden;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
}

.level {
  position: absolute;
  left: 10px;
  top: 10px;
  width: auto;
  height: 32px;
  padding: 8px;
  border-radius: 8px;
  background-color: blue;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.buganizer__title {
  margin-top: 30px;
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  font-size: 36px;
  font-weight: 100;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: #000;
  border-bottom: 2px solid #006be1;
}

.buganizer__title img {
  width: 48px;
  height: 48px;
  margin-right: 20px;
}

.buganizer__issue {
  width: 100%;
  height: 60px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  transition: 0.1s linear all;
  background-color: #151b1e;
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  font-weight: 100;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.buganizer__issue span {
  margin-right: 20px;
}

.buganizer__issue:hover, .buganizer__issue--selected {
  box-shadow: 0 0 6px 2px #006be190;
  transform: scale(1.02);
}

.coder {
  position: absolute;
  top: calc(5% + 24px);
  left: 48%;
  width: 48%;
  height: calc(90% - 48px);

  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;

  text-transform: uppercase;
  font-size: 42px;
  font-weight: 100;
  letter-spacing: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.code-container {
  background-image: url("@/assets/code_background.jpg");
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.code-container__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  background-color: #1e2833;
}

.error {
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: #ff0000;
  color: #fff;
  font-size: 52px;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.completed {
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: #00FF00;
  color: #fff;
  font-size: 52px;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.blue-background {
  background-color: #1e2833;
}
</style>
