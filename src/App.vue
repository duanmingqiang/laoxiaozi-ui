<template>
  <div id="app">
    <!-- <number-scroll :number="number"/> -->
  </div>
</template>

<script>
// import NumberScroll from './package/number-scroll/index'
export default {
  name: 'App',
  components: {
    // NumberScroll
  },
  data() {
    return {
      // number: 0
    }
  },
  mounted() {
    // setInterval(() => {
    //   const number = parseInt( Math.random() * 10000 )
    //   console.log('number', number)
    //   this.number = number
    // }, 5000)
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
  margin-top: 60px;
}
</style>
