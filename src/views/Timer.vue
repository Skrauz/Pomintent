<template>
  <div id="timer">
    <p id="clock">{{ millisToMinutesAndSeconds(time) }}</p>
    <button @click="startPom">Pomodoro</button>
    <button @click="startShort">Short Break</button>
    <button @click="startLong">Long Break</button>
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
    };
  },
  methods: {
    startPom() {
      this.time = this.pomLength;
      let pomoInterval = setInterval(() => {
        this.time -= 1000;
      }, 1000);
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