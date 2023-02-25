<template>
  <span class="slide-number-list-container">
    <div
      class="slide-number-list"
      :style="`position: relative; transform: translate(0, -${nowTopPotion}%);`"
    >
      0<br />1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9
    </div>
  </span>
</template>

<script>
export default {
    name: '',
    props: {
        value: {
            type: [Number, String],
            default: 0
        }
    },
    data() {
        return {
            nowTopPotion: 0,
            timmer: null
        }
    },
    watch: {
        value: {
            immediate: true,
            handler() {
                clearInterval(this.timmer)
                const topPotion = Number(this.value) * 10
                this.handleNumberChange(topPotion)
            }
        }
    },
    methods: {
        handleNumberChange(topPotion) {
            // 数字上升
            if (topPotion > this.nowTopPotion) {
                this.handleCountUp(topPotion)
            }
            // 数字下降
            if (topPotion < this.nowTopPotion) {
                this.handleCountDown(topPotion)
            }
        },
        // 处理数字上升
        handleCountUp(topPotion) {
            if (topPotion === this.nowTopPotion || topPotion < this.nowTopPotion) {
                this.nowTopPotion = topPotion
                return
            }
            this.timmer = setTimeout(() => {
                this.nowTopPotion = this.nowTopPotion + 3
                this.handleCountUp(topPotion)
            }, 50)
        },
        // 处理数字下降
        handleCountDown(topPotion) {
            if (topPotion === this.nowTopPotion || topPotion > this.nowTopPotion) {
                this.nowTopPotion = topPotion
                return
            }
            this.timmer = setTimeout(() => {
                this.nowTopPotion = this.nowTopPotion - 3
                this.handleCountDown(topPotion)
            }, 50)
        },
    }
}
</script>

<style lang="scss" scoped>
.slide-number-list-container {
  display: inline-block;
  height: 1em;
  overflow: hidden;
  .slide-number-list {
    font-weight: bold;
    color: #333;
  }
}
</style>