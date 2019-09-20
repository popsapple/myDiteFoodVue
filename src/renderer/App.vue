<template>
  <main id="app">
    <h1>식사를합시다</h1>
    <router-view></router-view>
  </main>
</template>
<script lang="ts">
import Vue from "vue";
import "./main.scss";
export default Vue.extend({
  data: () => {
    return {
      result: ""
    };
  }
});
</script>