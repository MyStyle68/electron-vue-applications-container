<template>
  <div @click.stop.prevent="" class="people-item">
    <div class="left">
      <img src="../../../../../assets/timg.jpeg" alt="头像">
    </div>
    <div class="right">
      <span class="user-name">wuhen(大帅锅)</span>
      <span class="user-sign">没办法太帅了!没办法太帅了!没办法太帅了!没办法太帅了!没办法太帅了!没办法太帅了!</span>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component({})
  export default class PeopleItem extends Vue {

  }
</script>

<style lang="less" scoped>
  .people-item {
    width: 100%;
    height: 52px;
    margin: 8px 0;
    padding: 5px 15px 5px 15px;
    position: relative;
    vertical-align: middle;

    &:hover {
      background-color: rgba(0, 0, 0, .05);
      cursor: pointer;
    }

    & > div {
      float: left;

      span {
        width: 100%;

      }

      .user-name {
        color: #333333;
        font-weight: bold;
        font-size: 14px;
      }

      .user-sign {
        width: 98%;
        color: #999999;
        font-size: 12px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .right {
      padding-top: 8px;
      padding-left: 8px;
      position: absolute;
      right: 0;
      left: 52px;
      top: 0;
      bottom: 0;
    }

    .left {
      padding-top: 8px;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 52px;
      text-align: right;
      line-height: 52px;

      img {
        width: 36px;
        height: 36px;
        border-radius: 100%;
      }
    }
  }
</style>
