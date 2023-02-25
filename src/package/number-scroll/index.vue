<template>
  <div class="number-scroll-container">
    <slide-number  v-for="(item, index) in number.toString().split('')" :key="index" :value="item"/>
    <!-- <slide-number v-for="item in number.toString().split('')" /> -->
  </div>
</template>

<script>
import SlideNumber from './components/SlideNumber'
export default {
  name: 'NumberScroll',
  components: { SlideNumber },
  props: {
    number: {
      type: Number,
      default: 121
    }
  },
  watch: {
    number: {
      immediate: true,
      handler() {

      }
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.number-scroll-container {
  font-size: 22px;
}
</style>