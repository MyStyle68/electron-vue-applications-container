<template>
  <div class="chat-view">
    <TopContent/>
    <Selects/>
    <div class="msg-content">
      <Vuescroll :ops="ops">
        <router-view/>
      </Vuescroll>
    </div>
  </div>
</template>

<script lang="ts">

  import {Component, Vue} from "vue-property-decorator";

  import TopContent from "@/views/electron/chat/top/TopContent.vue";
  import Selects from "@/views/electron/chat/selects/Selects.vue";
  import PeopleGroup from "@/views/electron/chat/message/people/PeopleGroup.vue";

  import Vuescroll from "vuescroll"

  @Component({
    components: {
      PeopleGroup,
      TopContent, Selects, Vuescroll
    }
  })
  export default class Chat extends Vue {
    private ops = {
      scrollPanel: {
        scrollingX: false
      },
      bar: {
        background: '#888888'
      }
    }

  }
</script>

<style lang="less" scoped>
  @import "../../../assets/fonts/chat/chatFont.css";

  * {
    user-select: none;
  }

  .chat-view {
    background-image: url("../../../assets/tmp/bgc/bgc.jpg");
    background-color: lightskyblue;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    margin: 0;
    padding: 0;
    background-color: rgba(0, 0, 0, 0.3);

    .msg-content {
      position: absolute;
      left: 0;
      right: 0;
      top: 146px;
      bottom: 0;
      overflow: hidden;
      background-color: rgba(255, 255, 255, 0.6);
    }
  }
</style>
