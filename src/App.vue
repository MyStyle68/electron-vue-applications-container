<template>
  <div id="app" :style="{backgroundColor: backGroundInfo.bgColor}">
    <div class="bgc" :style="backgroundImage"></div>
    <TopMessage/>
  </div>
</template>

<script lang="ts">

  import {Component, Vue} from "vue-property-decorator";

  import TopMessage from "@/views/message/TopMessage.vue";

  import {BackGround} from "./types/desktop";

  @Component({
    components:{TopMessage}
  })
  export default class App extends Vue {

    private backGroundInfo: BackGround = {
      bgColor: "skyblue",
      bgImg: ""
    };

    get backgroundImage(): any {
      return typeof this.backGroundInfo.bgImg &&
      this.backGroundInfo.bgImg.length > 0 ? {backgroundImage: `url(${this.backGroundInfo.bgImg})`} : {}
    }

  }

</script>

<style lang="less">

  .pos_full() {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }

  #app {
    .pos_full();

    .bgc {
      .pos_full();
      background-image: url(assets/tmp/bgc/bgc.jpg);
      background-size: 100% 100%;
    }
  }
</style>
