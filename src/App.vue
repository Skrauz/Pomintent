<template>
  <div class="content">
    <Header :title="title" :subtitle="subtitle" />
    <MenuBar />
    <router-view @titleDynamic="renderDynamicTitle" />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MenuBar from "./components/MenuBar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Header, MenuBar, Footer },
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
      document.title = settingName + ' (' + time +')';
    }
  }
};
</script>

<style>
@import "./style/css/style.css";
</style>
