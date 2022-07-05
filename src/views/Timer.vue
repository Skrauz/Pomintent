<template>
  <div id="timer">
    <p id="clock">25:00</p>
    <button @click="startPom">Pomodoro</button>
    <button @click="startShort">Short Break</button>
    <button @click="startLong">Long Break</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        pomLength: 25,
        shortLength: 5,
        longLength: 10,
    };
  },
  methods: {
    startPom() {},
    startShort() {},
    startLong() {},
  },
};
</script>

<style>
</style>