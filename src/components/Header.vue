<template>
  <div class="header">
    <h1>
      {{ title }}
    </h1>
    <h2>
      {{ subtitle }}
    </h2>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle'],
};
</script>

<style>
</style>