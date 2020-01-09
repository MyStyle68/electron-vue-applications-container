<template>
  <ul class="center-selects">
    <li @click="breakSelect(0, '/chat/peoples')" title="联系人"
        :class="`chat-font icon-fl-renyuan ${nowSelectIndex === 0 ? 'active' : ''}`"></li>
    <li @click="breakSelect(1, '/chat/peopleGroup')" title="群组" :class="`chat-font icon-renyuan ${nowSelectIndex === 1 ? 'active':''}`"></li>
    <li @click="breakSelect(2, '/chat/peopleMsg')" title="消息" :class="`chat-font icon-xiaoxi ${nowSelectIndex === 2 ? 'active':''}`"></li>
    <li @click="breakSelect(3, '/chat/pushMsg')" title="推送通知"
        :class="`chat-font icon-xiaoxituisongpeizhi ${nowSelectIndex === 3 ? 'active':''}`"></li>
  </ul>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component({})
  export default class Selects extends Vue {

    private nowSelectIndex: number = 0;

    private breakSelect(index: number, toPath: string) {
      this.nowSelectIndex = index;
      this.$router.replace(toPath)
    }

  }
</script>

<style lang="less" scoped>

  .center-selects {
    width: 100%;
    height: 78px;
    /*background-color: red;*/
    display: flex;
    padding: 10px 5px 18px;

    li {
      float: left;
      font-size: 32px;
      line-height: 42px;
      flex: 1;
      list-style: none;
      text-align: center;
      cursor: pointer;
      color: rgba(0, 0, 0, 0.3);
      position: relative;

      &:hover, &.active {
        color: rgba(0, 0, 0, 0.8);
        cursor: pointer;
      }

      &.active:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 100%;
        height: 3px;
        background-color: #3Fdd86;
      }
    }
  }
</style>
