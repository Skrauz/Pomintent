<template>
  <div id="timer">
    <div class="leftPanel">
      <button ref="pomoButton" @click="startPom" class="optionButton">
        Pomodoro
      </button>
      <button @click="startShort" class="optionButton">Short Break</button>
      <button @click="startLong" class="optionButton">Long Break</button>
    </div>
    <div class="rightPanel">
      <p id="clock">{{ millisToMinutesAndSeconds(time) }}</p>
      <button class="timerButton">Play</button>
      <button class="timerButton">Pause</button>
      <button class="timerButton">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pomLength: 1500000,
      shortLength: 5,
      longLength: 10,
      time: 1500000,
      pomoInterval: null,
      timerOn: false,
    };
  },
  methods: {
    startPom() {
      this.$refs.pomoButton.classList.toggle("buttonActive");
      if (!this.timerOn) {
        this.time = this.pomLength;
        this.pomoInterval = setInterval(() => {
          this.time -= 1000;
        }, 1000);
        this.timerOn = !this.timerOn;
        if (this.pomoInterval == 0) {
          clearInterval(this.pomoInterval);
        }
      } else {
        clearInterval(this.pomoInterval);
        this.timerOn = !this.timerOn;
        this.time = this.pomLength;
      }
    },
    startShort() {},
    startLong() {},
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