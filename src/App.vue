<template>
  <div id="app" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
    <template v-if="false">
      <!-- 播放器 -->
      <player />
      <!-- 业务流程 -->
      <bpmn />
    </template>
    
    <!-- 词云特效 -->
    <word-cloud :list="worldCloudList"/>
  </div>
</template>

<script>
const data = [
  {label: "十九大精神", value: "111", weight: 288},
  {label: "两学一做", value: "111", weight: 11},
  {label: "中华民族", value: "111", weight: 22},
  {label: "马克思主义", value: "111", weight: 33},
  {label: "民族复兴", value: "111", weight: 44},
  {label: "社会主义制度", value: "111", weight: 55},
  {label: "国防白皮书", value: "111", weight: 66},
  {label: "民主革命", value: "111", weight: 77},
  {label: "文化强国", value: "111", weight: 88},
  {label: "国家主权", value: "111", weight: 99},
  {label: "武装颠覆", value: "111", weight: 56},
  {label: "领土完整", value: "111", weight: 66},
  {label: "安全", value: "111", weight: 77},
  {label: "从严治党", value: "111", weight: 1},
  {label: "现代化经济体系", value: "111", weight: 122},
  {label: "国防动员", value: "111", weight: 33},
  {label: "信息化战争", value: "111", weight: 44},
  {label: "局部战争", value: "111", weight: 55},
  {label: "教育", value: "111", weight: 66},
  {label: "兵法", value: "111", weight: 77},
  {label: "一国两制", value: "111", weight: 88},
  {label: "特色社会主义思想", value: "111", weight: 99},

]
import Player from './package/player/index.vue'
import Bpmn from './package/bpmn/index'
import WordCloud from './package/word-cloud/index.vue'
export default {
  name: 'App',
  components: {
    Player,
    Bpmn,
    WordCloud
  },
  data() {
    return {
      worldCloudList: data
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
