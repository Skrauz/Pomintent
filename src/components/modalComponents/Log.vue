<template>
  <div id="logPage">
    <h1>Log</h1>
    <div id="emptyLogInfo" v-if="isEmpty">
      <h3>The log page is empty</h3>
      <p>Work sessions will appear here once they're complete</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEmpty: true,
    };
  },
};
</script>

<style>
</style>