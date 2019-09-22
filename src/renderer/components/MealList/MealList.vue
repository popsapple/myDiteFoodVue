<template>
  <div class="MealList" v-bind:class="(openMenu ? 'open' : '')">
    <section v-bind:class="time">
      <button v-on:click="changeMenu(time)">{{korTime}}</button>
      <div class="FoodCard" v-for="(item, index) in getMealList[time]" v-bind:key="index">
        <ul class="content">
          <li>
            <ul>
              <li>
                <button class="insert" v-on:click="removeMeal({meal: 'morning', index: index})">거르기</button>
              </li>
            </ul>
            <strong class="title">{{ item.name }}</strong>
            <img
              v-bind:src="'/static/' + item.imgurl + Math.ceil(Math.random()*10) + '.jpg'"
              v-bind:alt="item.title"
            />
          </li>
          <li>
            <strong>{{ item.weight }}g 당 영양성분</strong>
          </li>
          <li>
            <i>칼로리</i>
            <span>{{ item.kcal }}kal</span>
            <meter v-bind:id="item.name" min="0" max="2000" v-bind:value="item.kcal">item.kcal/2000</meter>
          </li>
          <li>
            <i>지방</i>
            <span>{{ item.fat }}g</span>
            <meter v-bind:id="item.name" min="0" max="50" v-bind:value="item.fat">item.fat/50</meter>
          </li>
          <li>
            <i>단백질</i>
            <span>{{ item.protein }}g</span>
            <meter
              v-bind:id="item.name"
              min="0"
              max="50"
              v-bind:value="item.protein"
            >item.protein/50</meter>
          </li>
          <li>
            <i>탄수화물</i>
            <span>{{ item.carbon }}g</span>
            <meter
              v-bind:id="item.name"
              min="0"
              max="328"
              v-bind:value="item.carbon"
            >item.protcarbonein/328</meter>
          </li>
          <li>
            <i>식이섬유</i>
            <span>{{ item.fiber }}g</span>
            <meter
              v-bind:id="item.name"
              min="0"
              max="25"
              v-bind:value="item.fiber"
            >item.protcarbonein/25</meter>
          </li>
          <li>
            <i>수분</i>
            <span>{{ item.water }}mL</span>
            <meter
              v-bind:id="item.name"
              min="0"
              max="2000"
              v-bind:value="item.water"
            >item.protcarbonein/2000</meter>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import "./MealList.scss";
import Vue from "vue";
import { IFoodInfo } from "./../FoodCard/FoodCard.vue";
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  props: {
    openmenu: String,
    time: String,
    korTime: String
  },
  computed: {
    openMenu() {
      if (this.$props.time == this.$props.openmenu) {
        return true;
      } else {
        return false;
      }
    },
    ...mapGetters({
      getMealList: "getMealList"
    })
  },
  methods: {
    changeMenu(time: String) {
      console.log("1번실행", time);
      this.$emit("change-menu", time);
    },
    insertCart(item: IFoodInfo) {
      console.log("선택한녀석", item);
    },
    ...mapActions({
      addMeal: "addMeal",
      removeMeal: "removeMeal"
    })
  }
});
</script>
