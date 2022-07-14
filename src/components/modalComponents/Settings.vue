<template>
  <div id="settingsModal">
    <h1>Settings</h1>
    <p>
      Autostart pomodoros and breaks (long break after every 4th pomodoro):
      <input type="checkbox" />
    </p>
    <p>Pomodoro length (minutes):</p>
    <input type="number" v-model="pomoLength" min="1" />
    <p>Short Break length (minutes):</p>
    <input type="number" v-model="shortLength" min="1" />
    <p>Long Break length (minutes):</p>
    <input type="number" v-model="longLength" min="1" />

    <br />
    <button @click="saveSettingsAndClose">OK</button>
    <button @click="restoreDefault">Restore Default</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pomoLength: null,
      shortLength: null,
      longLength: null,
    };
  },
  methods: {
    restoreDefault(){
      this.$emit(
          "settings",
          25,
          5,
          20,
        );
        this.$emit("modalCloseSignal");
    },

    saveSettingsAndClose() {
      if (this.pomoLength && this.shortLength && this.longLength) {
        this.$emit(
          "settings",
          this.pomoLength,
          this.shortLength,
          this.longLength,
        );
      }
      this.$emit("modalCloseSignal");
    },
  },
};
</script>

<style>
</style>