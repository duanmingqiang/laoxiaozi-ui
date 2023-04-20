<template>
<div  class="player-container">
    <div id="player"></div>
</div>
  
</template>

<script>
import Player from 'xgplayer';
import 'xgplayer/dist/index.min.css';
export default {
    name: 'player',
    data() {
        return {
            player: null
        }
    },
    mounted() {
        this.player = new Player({
            id: 'player',
            url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4',
            width: '100%',
            height: '100%',
            poster: "https://img95.699pic.com/xsj/0q/wf/d4.jpg%21/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast"
        })
    }
}
</script>

<style lang="scss" scoped>
.player-container {
   width: 400px;
   height: 300px;
}

</style>