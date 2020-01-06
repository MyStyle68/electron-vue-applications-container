<template>
  <div class="chat-view">
    <div @mousedown="mousedown($event)" class="chat-top">
      <span @click="hideWindow" title="关闭" class="close-btn icon icon-close"></span>
      <div class="user-info">
        <div class="left">
          <div class="user-img">
            <Dropdown class="state-pos">
              <div :class="`now-state ${imgState}`"></div>
              <DropdownMenu slot="list">
                <DropdownItem>
                  <RadioGroup v-model="imgState" vertical>
                    <Radio label="online">
                      <i class="online"></i>
                      <span>在线</span>
                    </Radio>
                    <Radio label="busy">
                      <i class="busy"></i>
                      <span>忙碌</span>
                    </Radio>
                  </RadioGroup>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div class="right">

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

  import {Component, Vue} from "vue-property-decorator";

  import {Dropdown, DropdownMenu, DropdownItem, RadioGroup, Radio, Icon} from "view-design";

  @Component({
    components: {
      Dropdown, DropdownMenu, DropdownItem, RadioGroup, Radio, Icon
    }
  })
  export default class Chat extends Vue {

    private nowState: 'online' | 'busy' = "online";

    private get imgState() {
      return this.nowState;
    }

    private set imgState(str: 'online' | 'busy') {
      console.log("除法")
      this.nowState = str
    }

    private hideWindow() {
      this.electronRemote.getCurrentWindow().hide()
    }

    private mousedown(e: any) {
      const remote = this.electronRemote;
      const currWindowPosition = remote.getCurrentWindow().getPosition();
      let formX = e.screenX - currWindowPosition[0];
      let formY = e.screenY - currWindowPosition[1];
      document.onmousemove = function (e) {
        remote.getCurrentWindow().setPosition((e.screenX - formX), (e.screenY - formY));
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      }
    }
  }
</script>

<style lang="less" scoped>
  .online {
    background-color: lawngreen;
  }

  .busy{
    background-color: darkorange;
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

    .chat-top {
      width: 100%;
      height: 110px;
      background-color: red;
      cursor: move;

      .close-btn:hover {
        color: rgba(0, 0, 0, 0.6);
      }

      .close-btn {
        z-index: 9999999999;
        color: rgba(0, 0, 0, 0.9);
        padding: 3px;
        line-height: 18px;
        font-size: 18px;
        cursor: pointer;
        position: absolute;
        right: 12px;
        top: 12px;
        text-align: center;
        /*background-color: rgba(0,0,0,0.6);*/
      }

      .user-info {
        width: 100%;
        height: 100%;
        position: relative;
        background-color: transparent;

        .left {
          width: 110px;

          .user-img {
            cursor: pointer;
            position: relative;
            width: 58px;
            height: 58px;
            background-image: url("../../../assets/timg.jpeg");
            background-size: 100% 100%;
            border-radius: 29px;
            margin: 18px 0 0 12px;

            .state-pos {
              position: absolute;
              right: 5px;
              bottom: 0;
            }

            .now-state {
              width: 12px;
              height: 12px;
              border-radius: 6px;
              position: absolute;
              bottom: 0;
              right: 0;
            }
          }
        }

        .left, .right {
          float: left;
          height: 100%;
        }
      }

    }
  }
</style>
