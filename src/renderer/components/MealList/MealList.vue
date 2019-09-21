<template>
  <div class="MealList">
    <section v-bind:class="time">
      <button>{{korTime}}</button>
      <ul>
        <li></li>
        <li></li>
      </ul>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </section>
  </div>
</template>
<script lang="ts">
import "./MealList.scss";
import Vue from "vue";
import { IFoodInfo } from "./../FoodCard/FoodCard.vue";

export default Vue.extend({
  props: {
    foods: Array as () => IFoodInfo[],
    time: String,
    korTime: String
  },
  methods: {
    insertCart(item: IFoodInfo) {
      console.log("선택한녀석", item);
    }
  }
});
</script>
