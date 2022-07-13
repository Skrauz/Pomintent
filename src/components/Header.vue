<template>
  <div class="header">
    <router-link to="/">
    <h1>
      {{ title }}
    </h1>
    </router-link>
    <h2>
      {{ subtitle }}
    </h2>
    <p>
      Made by Sebastian Krauzowicz | <a href="https://github.com/FunkySphere" target="_blank">Github Page</a>
    </p>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle'],
};
</script>

<style>
</style>