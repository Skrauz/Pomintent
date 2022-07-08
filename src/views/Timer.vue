<template>
  <div id="timer">
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
    <div class="timerButtons">
      <p id="clock">{{ millisToMinutesAndSeconds(time) }}</p>
      <button class="timerButton playButton">Play</button>
      <button class="timerButton pauseButton">Pause</button>
      <button class="timerButton resetButton">Reset</button>
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
      time: 1500000,
      pomoInterval: null,
      timerOn: false,
    };
  },
  methods: {
    resetTimer(length) {
      clearInterval(this.pomoInterval);
      this.timerOn = !this.timerOn;
      this.time = length;
    },
    startTimer(length) {
      if (!this.timerOn) {
        this.time = length;
        this.pomoInterval = setInterval(() => {
          this.time -= 1000;
          if (this.time < 0) {
            this.resetTimer(length);
            this.$refs.longButton.classList.remove("buttonActive");
            this.$refs.shortButton.classList.remove("buttonActive");
            this.$refs.pomoButton.classList.remove("buttonActive");
          }
        }, 1000);
        this.timerOn = !this.timerOn;
      } else {
        this.resetTimer(length);
      }
    },
    startPom() {
      this.$refs.longButton.classList.remove("buttonActive");
      this.$refs.shortButton.classList.remove("buttonActive");
      this.$refs.pomoButton.classList.toggle("buttonActive");
      if (this.timerOn) {
        this.resetTimer(this.pomLength);
      }
      this.startTimer(this.pomLength);
    },
    startShort() {
      this.$refs.longButton.classList.remove("buttonActive");
      this.$refs.pomoButton.classList.remove("buttonActive");
      this.$refs.shortButton.classList.toggle("buttonActive");
      if (this.timerOn) {
        this.resetTimer(this.shortLength);
      }
      this.startTimer(this.shortLength);
    },
    startLong() {
      this.$refs.pomoButton.classList.remove("buttonActive");
      this.$refs.shortButton.classList.remove("buttonActive");
      this.$refs.longButton.classList.toggle("buttonActive");
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