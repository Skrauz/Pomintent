<template>
  <div id="logPage">
    <h1>Log</h1>
    <div id="emptyLogInfo" v-if="isEmpty">
      <h3>The log page is empty</h3>
      <p>Work sessions will appear here once they're complete</p>
    </div>
    <div id="logContent" v-if="!isEmpty">
      <div class="log" v-for="log in logs" :key="log.id">
        <p>
          Name: {{log.name}}
        </p>
        <p>
          length: {{log.length}}
        </p>
        <p>
          date: {{log.date}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created(){
    if(this.logs.length != 0){
      this.isEmpty = false
    }
  },

  computed:{

  },
  data() {
    return {
      isEmpty: true,
    };
  },
  props: ['logs']
};
</script>

<style>
</style>