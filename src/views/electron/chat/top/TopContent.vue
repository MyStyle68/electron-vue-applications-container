<template>
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
        <div class="top">
          <span :title="userName" class="user-name">{{userName}}</span>
        </div>
        <div class="bottom">
          <span :title="signText" @click.stop.prevent="signTextClick" v-show="!isInSign"
                class="sign">{{signText}}</span>
          <Input ref="signInput" @on-blur="updateSign(false)" @on-enter="updateSign(true)" v-show="isInSign"
                 style="width: 98%;"
                 placeholder="再此输入说说"
                 v-model="sign" size="small"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  import {Dropdown, DropdownMenu, DropdownItem, RadioGroup, Radio, Icon, Input} from "view-design";

  @Component({
    components: {
      Dropdown, DropdownMenu, DropdownItem, RadioGroup, Radio, Icon, Input
    }
  })
  export default class TopContent extends Vue {

    private nowState: 'online' | 'busy' = "online";

    private isInSign: boolean = false;

    private userName: string = 'wuhen(苏林鑫)wuhen(苏林鑫)wuhen(苏林鑫)wuhen(苏林鑫)wuhen(苏林鑫)wuhen(苏林鑫)';

    private sign: string = "";

    private isEnter: boolean = false;

    private get signText() {
      if (typeof this.sign == "undefined" || this.sign == "") {
        return "再此输入说说"
      } else {
        return this.sign
      }
    }

    // 我要money我要money要要要

    private get imgState() {
      return this.nowState;
    }

    private set imgState(str: 'online' | 'busy') {
      console.log("除法");
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

    private signTextClick() {
      this.isInSign = !this.isInSign;
      if (this.isInSign) {
        setTimeout(() => (this.$refs["signInput"] as Input).focus(), 100)
      }
    }

    private updateSign(isEnter: boolean) {
      if (this.isEnter) {
        this.isEnter = false;
        return
      }
      this.isEnter = isEnter;
      this.isInSign = !this.isInSign;

    }

  }
</script>

<style lang="less" scoped>
  .online {
    background-color: lawngreen;
  }

  .busy {
    background-color: darkorange;
  }

  .chat-top {
    width: 100%;
    height: 82px;
    cursor: move;

    .close-btn:hover {
      color: rgba(0, 0, 0, 0.9);
      cursor: pointer;
    }

    .close-btn {
      z-index: 9999999999;
      color: rgba(0, 0, 0, 0.5);
      padding: 3px;
      line-height: 18px;
      font-size: 18px;
      cursor: pointer;
      position: absolute;
      right: 5px;
      top: 5px;
      text-align: center;
      /*background-color: rgba(0,0,0,0.6);*/
    }

    .user-info {
      width: 100%;
      height: 100%;
      position: relative;
      background-color: transparent;
      display: flex; /*设为伸缩容器*/


      .left, .right {
        float: left;
        height: 100%;
      }

      .left {
        margin-right: 6px;
        /*width: 110px;*/

        .user-img {
          cursor: pointer;
          position: relative;
          width: 58px;
          height: 58px;
          background-image: url("../../../../assets/timg.jpeg");
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

      .right {
        flex: 1;

        .top, .bottom {
          width: 100%;
          height: 50%;
          overflow: hidden;
        }

        .top {
          /*background-color: deepskyblue;*/
          position: relative;

          .user-name {
            cursor: default;
            display: block;
            width: 98%;
            font-size: 15px;
            position: absolute;
            left: 0;
            bottom: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: bold;
          }
        }

        .bottom {
          position: relative;
          /*height: 20px;*/
          /*background-color: lightgreen;*/

          .sign {
            cursor: pointer;
            margin-top: 3px;
            width: 98%;
            overflow: hidden;
            display: block;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 12px;
            position: absolute;
            left: 0;
            top: 0;
          }
        }
      }
    }

  }
</style>
