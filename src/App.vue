<template>
  <div class="content">
    <Header :title="title" :subtitle="subtitle" />
    
    <router-view @titleDynamic="renderDynamicTitle" />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  
  components: { Header },
  created() {
    document.title = "Pomo (25:00)"
  },
  data() {
    return {
      title: "Pomintent",
      subtitle: "Intention oriented Pomodoro Timer",
    };
  },
  methods: {
    renderDynamicTitle(time, settingName){
      document.title = '(' + time +') ' + settingName;
    }
  }
};
</script>

<style>
@import "./style/css/style.css";
</style>
