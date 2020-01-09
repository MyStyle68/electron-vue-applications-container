<template>
  <div>
    <PeoplesGroup/>
    <PeoplesGroup/>
    <PeoplesGroup/>
    <PeoplesGroup/>
    <PeoplesGroup/>
    <PeoplesGroup/>
    <PeoplesGroup/>
    <PeoplesGroup/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  import PeoplesGroup from "../message/people/PeopleGroup.vue";

  @Component({
    components: {
      PeoplesGroup
    }
  })
  export default class Peoples extends Vue{

  }
</script>

<style scoped>

</style>
