<template>
  <div id="app" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
    <player />
    <bpmn />
  </div>
</template>

<script>

import Player from './package/player/index.vue'
import Bpmn from './package/bpmn/index'
export default {
  name: 'App',
  components: {
    Player,
    Bpmn
  },
  data() {
    return {
    }
  },
  mounted() {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

/* app.css */
.bpmn-icon-task.red {
    color: #cc0000 !important;
}


</style>
