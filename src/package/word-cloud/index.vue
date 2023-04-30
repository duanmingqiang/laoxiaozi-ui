<template>
  <div ref="wordCloudContainer" class="word-cloud-container">
    <span class="word-label" v-for="(wordInfo, index) in worldLabelList" :key="index" :style="setStyle(wordInfo)" > 
      {{ wordInfo.label }}
    </span>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      centerX: 0,
      centerY: 0,
      radius: 0,
      speedX: (Math.PI / 180) * 1,
      speedY: (Math.PI / 180) * 1,
      worldLabelList: [],
      timmer: null,
      speed: 30
    }
  },
  watch: {
    list: {
      immediate: true,
      handler() {}
    }
  },
  computed: {
  },
  mounted() {
    console.log('wordCloudContainer', )
    this.setInitData()
    this.init()
    clearInterval(this.timmer)
    this.clearTimmer()
    this.timmer = setInterval(() => {
      // 刷新位置
      this.rotateX()
      this.rotateY()

    }, this.speed);
  },
  methods: {
    // 初始化
    init() {
      const length = this.list.length
      this.worldLabelList = this.list.map((wordInfo, index) => {
        let split = -1 + (2 * (index + 1) - 1) / length;
        console.log(index)
        // 词云列表均匀分配在平面圆弧度
        const angle = Math.acos(split);
        // const angle = (Math.PI / 180) * (360 / length) * index
        // 这块暂时没太理解，看别人这样写的，
        const angleZ = angle * Math.sqrt(length * Math.PI)
        //  设置x坐标
        const xCoordinate = this.centerX + this.radius * Math.sin(angleZ) * Math.cos(angle)
        // 设置y坐标
        const yCoordinate = this.centerY + this.radius * Math.sin(angleZ) * Math.sin(angle)
        // 设置z坐标
        const zCoordinate = this.radius * Math.cos(angleZ)
         
        const item = {
          label: wordInfo.label,
          xCoordinate,
          yCoordinate,
          zCoordinate,
          angle,
          angleZ
        }
        return item
      })
    },
    // 设置中心点和半径等基础信息
    setInitData() {
      const info = this.$refs.wordCloudContainer.getBoundingClientRect()
      this.centerX = parseInt(info.width / 2)
      this.centerY = parseInt(info.height / 2)
      const minLength = Math.min(info.width, info.height)
      this.radius = parseInt(minLength / 2)
    },
    // 设置词云item位置等css属性
    setStyle(wordInfo) {
      return {
        top: wordInfo.yCoordinate + 'px',
        left: wordInfo.xCoordinate + 'px',
        opacity: wordInfo.zCoordinate > 0? 1: 0.3,
      }
    },
    // 清除定时器
    clearTimmer() {
      clearInterval(this.timmer)
    },
    rotateX() {
      const cos = Math.cos(this.speedX);
      const sin = Math.sin(this.speedX);
      this.worldLabelList.map(wordInfo => {
        wordInfo.yCoordinate = (wordInfo.yCoordinate - this.centerY) * cos - wordInfo.zCoordinate * sin + this.centerY
        wordInfo.zCoordinate = wordInfo.zCoordinate * cos + (wordInfo.yCoordinate - this.centerY) * sin

      })
    },
    rotateY() {
      const cos = Math.cos(this.speedY);
      const sin = Math.sin(this.speedY);
      this.worldLabelList.map(wordInfo => {
        wordInfo.xCoordinate = (wordInfo.xCoordinate - this.centerX) * cos - wordInfo.zCoordinate * sin + this.centerX
        wordInfo.zCoordinate = wordInfo.zCoordinate * cos + (wordInfo.xCoordinate - this.centerX) * sin;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.word-cloud-container {
  width: 300px;
  height: 300px;
  position: relative;
  .word-label {
    position: absolute;
    white-space: nowrap;
    transform: translate(-50%, -50%);
  }
}
</style>