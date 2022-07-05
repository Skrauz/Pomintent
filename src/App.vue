<template>
  <Header :title="title" :subtitle="subtitle" />
  <MenuBar />
  <router-view />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import MenuBar from "./components/MenuBar.vue";
import Footer from "./components/Footer.vue"

export default {
  components: { Header, MenuBar, Footer },
  data() {
    return {
      title: "Pomintent",
      subtitle: "Habit oriented Pomodoro Timer",
    };
  },
};
</script>

<style>
@import "./style/css/style.css";
</style>
