<template>
  <div id="menuBar">
    <nav>
      <button @click="$emit('modalSignal', 'log')">Log</button>
      <button @click="$emit('modalSignal', 'settings')">Settings</button>
      <button @click="$emit('modalSignal', 'faq')">FaQ</button>
    </nav>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  }
};
</script>

<style>
</style>