<template>
  <div class="FoodWapper">
    <div class="FoodCard" v-for="(item, index) in foods" v-bind:key="index">
      <ul class="content">
        <li>
          <ul>
            <li>
              <button class="insert" v-on:click="insertCart(item)">아침</button>
            </li>
            <li>
              <button class="insert" v-on:click="insertCart(item)">점심</button>
            </li>
            <li>
              <button class="insert" v-on:click="insertCart(item)">저녁</button>
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
          <meter v-bind:id="item.name" min="0" max="50" v-bind:value="item.protein">item.protein/50</meter>
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
  </div>
</template>
<script lang="ts">
import "./FoodCard.scss";
import Vue from "vue";

export interface IFoodInfo {
  title: string;
  image: string;
  weight: number;
  kcal: number; // 2000
  fat: number; // 50
  protain: number; // 60
  carbohydrate: number; // 328
  salt: number; // 2
  cholesterol: number; // 0.3
}

export default Vue.extend({
  props: {
    foods: Array as () => IFoodInfo[]
  },
  methods: {
    insertCart(item: IFoodInfo) {
      console.log("선택한녀석", item);
    }
  }
});
</script>
