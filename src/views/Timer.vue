<template>
  <div id="timer">
    <input
      type="text"
      v-model="intent"
      name="intentInput"
      placeholder="Your Intention Here"
    />

    <p id="clock">{{ millisToMinutesAndSeconds(time) }}</p>
    <div class="timerButtons">
      <button @click="playTimer" class="timerButton playButton">Play</button>
      <button @click="pauseTimer" class="timerButton pauseButton">Pause</button>
      <button @click="resetTimer" class="timerButton resetButton">Reset</button>
    </div>
    <div class="optionsButtons">
      <button
        ref="pomoButton"
        @click="startPom"
        class="optionButton pomoButton"
      >
        Pomodoro
      </button>
      <button
        ref="shortButton"
        @click="startShort"
        class="optionButton sBreakButton"
      >
        Short Break
      </button>
      <button
        ref="longButton"
        @click="startLong"
        class="optionButton lBreakButton"
      >
        Long Break
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pomLength: 1500000,
      shortLength: 300000,
      longLength: 600000,
      currentSetting: "",
      time: 1500000,
      pomoInterval: null,
      timerOn: false,
      intent: "",
    };
  },
  methods: {
    //timer button methods
    playTimer(){
      
    },

    resetTimer(length) {
      clearInterval(this.pomoInterval);
      this.timerOn = false;
      this.time = length;
    },
    startTimer(length) {
      if (this.timerOn == false) {
        this.time = length;
        this.timerOn = true;
        this.pomoInterval = setInterval(() => {
          this.time -= 1000;
          if (this.time < 0) {
            this.resetTimer(length);
          }
        }, 1000);
      } else {
        this.resetTimer(length);
      }
    },
    startPom() {
      if (this.timerOn) {
        this.resetTimer(this.pomLength);
      }
      this.startTimer(this.pomLength);
    },
    startShort() {
      if (this.timerOn) {
        this.resetTimer(this.shortLength);
      }
      this.startTimer(this.shortLength);
    },
    startLong() {
      /*       this.$refs.pomoButton.classList.remove("buttonActive");
      this.$refs.shortButton.classList.remove("buttonActive");
      this.$refs.longButton.classList.toggle("buttonActive"); */
      if (this.timerOn) {
        this.resetTimer(this.longLength);
      }
      this.startTimer(this.longLength);
    },
    millisToMinutesAndSeconds(millis) {
      var minutes = Math.floor(millis / 60000);
      var seconds = ((millis % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    },
  },
};
</script>

<style>
</style>