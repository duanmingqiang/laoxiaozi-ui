<template>
<div  class="player-container">
    <div id="player"></div>
    <div id="canvas">
        <canvas width="550" height="110"></canvas>
    </div>
</div>
  
</template>

<script>
import Player from 'xgplayer';
import 'xgplayer/dist/index.min.css';

// 现在music作为一个固定的preset使用，不再继承player, 解决耦合性过大问题
// import MusicPreset, { Analyze } from 'xgplayer-music';
import MusicPreset from 'xgplayer-music';
export default {
    name: 'player',
    data() {
        return {
            player: null
        }
    },
    mounted() {
        this.audioPlay()
    },
    methods: {
        videoPlay() {
            this.player = new Player({
                id: 'player',
                url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4',
                width: '100%',
                height: '100%',
                poster: "https://img95.699pic.com/xsj/0q/wf/d4.jpg%21/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast"
            })
        },
        audioPlay() {
            this.player = new Player({
                id: 'player',
                mediaType: 'audio',
                volume: 0.8,
                width: '100%',
                height: 50,
                url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/music/audio.mp3',
                // 音乐播放控制模块配置
                music: {
                    list: [],
                    preloadNext: true, // 预加载下一首
                    switchKeepProgress: false, // 切换歌曲保持进度
                    abCycle: { // AB段循环播放
                    start: 3, 
                    end: 9,
                    loop: true
                    }
                },
                preset: [MusicPreset], // 如果要同时使用默认preset，那么配置是['default', MusicPreset]
            })
            // 初始化频谱
            // window.analyze = new Analyze(this.player, document.querySelector('canvas'), {
            //     bgColor: 'rgba(0,0,0,0.65)',
            //     stroke: 1,
            // })
        }
    }
}
</script>

<style lang="scss" scoped>
.player-container {
   width: 400px;
   height: 300px;
}

</style>