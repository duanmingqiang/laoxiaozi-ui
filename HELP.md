### 使用方式

``` vue
import { NumberScroll } from 'laoxiaozi-ui'
import 'laoxiaozi-ui/lxz-ui.css'

<template>
  <div id="app">
    <number-scroll :number="number"/>
  </div>
</template>

<script>
import { NumberScroll } from 'laoxiaozi-ui'
import 'laoxiaozi-ui/lxz-ui.css'
export default {
  name: 'App',
  data() {
    return {
      number: 0
    }
  },
  components: {
    NumberScroll
  },
  mounted() {
    clearInterval(this.timmer)
    this.timmer = setInterval(() => {
      this.number = parseInt( Math.random() * 10000 )
      console.log(this.number)
    }, 1000 * 4)
  }
}
</script>
```