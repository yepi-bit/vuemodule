<template>
  <div align="middle">
    <video-player class="video-player-box"
                  ref="videoPlayer"
                  :options="playerOptions"
                  :playsinline="true"
                  customEventName="customstatechangedeventname"
                  @play="onPlayerPlay($event)"
                  @timeupdate="onPlayerTimeupdate($event)"
                  @pause="onPlayerPause($event)"
                  @statechanged="playerStateChanged($event)"
                  @ready="playerReadied">
    </video-player>
  </div>
</template>

<script>
// Similarly, you can also introduce the plugin resource pack you want to use within the component
// import 'some-videojs-plugin'
export default {
  data() {
    return {
      playerOptions: {
        // videojs options
        height:360,
        muted: true,
        language: 'zh-CN',
        autoplay: true,
        playbackRates: [0.7, 1.0, 1.5, 2.0, 3.0],
        sources: [{
          type: "video/mp4",
          src: "//mp4.vjshi.com/2022-01-24/e05d7c34ac36481697016393737e2d8f.mp4"
        }]
      }
    }
  },
  mounted() {
    this.player.muted(false)
    console.log('this is current player instance object', this.player)
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    // listen event
    onPlayerPlay(player) {
      console.log('player play!', player)
    },
    onPlayerTimeupdate(player) {
      console.log('time',player)
    },
    onPlayerPause(player) {
      console.log('player pause!', player)
    },
    // ...player event

    // or listen state event
    playerStateChanged(playerCurrentState) {
      console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied(player) {
      console.log('the player is readied', player)
      console.log('example player 1 readied', player)
      player.currentTime(10)
      // you can use it to do something...
      // player.[methods]
    }
  }
}
</script>
