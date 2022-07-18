<template>
  <div id="settingsModal">
    <h1>Settings</h1>
    <p>
      Autostart pomodoros and breaks (long break after every 4th pomodoro):
      <input type="checkbox" v-model="autostart" />
    </p>
    <p>Pomodoro length (minutes):</p>
    <input type="number" v-model="pomoLength" min="1" />
    <p>Short Break length (minutes):</p>
    <input type="number" v-model="shortLength" min="1" />
    <p>Long Break length (minutes):</p>
    <input type="number" v-model="longLength" min="1" />
    <br />
    <p>
      Sound select:
      <select v-model="sound">
        <option value="1">Bell 1</option>
        <option value="2">Bell 2</option>
        <option value="3">Bell 3</option>
        <option value="4">Bell 4</option>
      </select>
    </p>
    <p>
      Sound volume:
      <input
        type="range"
        min="1"
        max="100"
        class="slider"
        v-model="soundVolume"
      />
      {{ soundVolume }}
    </p>

    <br />
    <button @click="saveSettingsAndClose">OK</button>
    <button @click="restoreDefault">Restore Default</button>
    <button @click="testSound">Test Sound</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      autostart: false,
      pomoLength: null,
      shortLength: null,
      longLength: null,
      sound: null,
      soundVolume: null,
    };
  },
  methods: {
    testSound() {
      if (this.sound) {
        var soundToTest;
        if (this.sound == 1) {
          soundToTest = new Audio(require("../../assets/bell1.flac"));
        } else if (this.sound == 2) {
          soundToTest = new Audio(require("../../assets/bell2.wav"));
        } else if (this.sound == 3) {
          soundToTest = new Audio(require("../../assets/bell3.wav"));
        } else if (this.sound == 4) {
          soundToTest = new Audio(require("../../assets/bell4.wav"));
        }
        if (this.soundVolume) {
          soundToTest.volume = this.soundVolume / 100;
        }
        soundToTest.play();
      }
    },

    restoreDefault() {
      this.$emit("settings", 25, 5, 20, false, 1, 0.75);
      this.$emit("modalCloseSignal");
    },

    saveSettingsAndClose() {
      this.$emit(
        "settings",
        this.pomoLength,
        this.shortLength,
        this.longLength,
        this.autostart,
        this.sound,
        this.soundVolume
      );
      this.$emit("modalCloseSignal");
    },
  },
};
</script>

<style>
</style>