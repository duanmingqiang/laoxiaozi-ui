<template>
  <div class="word-cloud-container" id="wrap">
    <a href="#" class="tag">前端学习</a>
    <a href="#" class="tag">javascript</a>
    <a href="#" class="tag">css</a>
    <a href="#" class="tag">html</a>
    <a href="#" class="tag">jquery</a>
    <a href="#" class="tag">设计模式</a>
    <a href="#" class="tag">算法于数据结构</a>
    <a href="#" class="tag">nodejs</a>
    <a href="#" class="tag">tcp/ip详解</a>
    <a href="#" class="tag">http</a>
    <a href="#" class="tag">计算机网络</a>
    <a href="#" class="tag">程序员面试宝典</a>
    <a href="#" class="tag">剑指offer</a>
    <a href="#" class="tag">你不知道的javascript</a>
    <a href="#" class="tag">java</a>
    <a href="#" class="tag">java核心技术</a>
    <a href="#" class="tag">nodejs实战</a>
    <a href="#" class="tag">jquery</a>
    <a href="#" class="tag">vue</a>
    <a href="#" class="tag">移动端开发</a>
    <a href="#" class="tag">html5</a>
    <a href="#" class="tag">nodejs实战</a>
    <a href="#" class="tag">nodejs实战</a>
  </div>
</template>

<script>
// import { Initialization } from './test'
export default {
    mounted() {
        // let tags = document.getElementsByTagName('a' ) ;
        // let wrap = document.getElementById( 'wrap' );
        // let options = {
        //     data: tags,
        //     container: wrap
        // }
        // new Initialization(options);
    }
}
</script>

<style lang="scss" scoped>
    .word-cloud-container {
        width: 500px;
        height: 400px;
        // background: blue;
        position: relative;
        border: 1px solid red;
        .tag {
            display: inline-block;
            position: absolute;
            height: 50px;
            line-height: 50px;
            font-size: 20px;
            text-decoration: none;
        }
    }
</style>