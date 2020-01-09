<template>
  <div @click.stop.prevent="showOrHidePeople" :class="`people-group ${isShowPeoples ? 'active': ''}`">
    <div class="left">
      <i class="chat-font icon-jiantou"></i>
    </div>
    <div class="right">
      <span>我是描述文字</span>
    </div>
    <div v-show="isShowPeoples" class="peoples">
      <PeopleItem/>
      <PeopleItem/>
      <PeopleItem/>
      <PeopleItem/>
      <PeopleItem/>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import PeopleItem from "@/views/electron/chat/message/people/PeopleItem.vue";

  @Component({
    components: {
      PeopleItem
    }
  })
  export default class PeopleGroup extends Vue {

    private isShowPeoples: boolean = false

    private showOrHidePeople() {
      this.isShowPeoples = !this.isShowPeoples;
    }

  }
</script>

<style lang="less" scoped>
  .people-group {
    width: 100%;
    min-height: 18px;
    line-height: 18px;
    font-size: 14px;
    margin: 10px 0;
    cursor: pointer;

    &.active > .left > i {
      display: block;
      transform: rotate(90deg);
    }

    .left, .right {
      float: left;
    }

    .right {
      color: #333333;
    }

    .left {
      color: #888888;
      width: 28px;
      text-align: right;
      padding-right: 3px;
    }

    .peoples {
      width: 100%;
      overflow: hidden;

      &:last-child {
        margin-bottom: -10px;
      }
    }
  }
</style>
