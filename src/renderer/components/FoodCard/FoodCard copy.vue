<template>
  <div>
    <div class="FoodCard" v-for="(item, index) in foods" v-bind:key="index">
      <ul>
        <li>
          <strong>{{ item.title }}</strong>
          <img v-bind:src="item.image" v-bind:alt="item.title" />
        </li>
        <li>
          <strong>{{ item.weight }} 당 영양성분</strong>
        </li>
        <li>
          <strong>칼로리 :{{ item.kcal }}</strong>
          <strong>{{ item.kcal / 2000 }}</strong>
        </li>
        <li>
          <strong>지방 :{{ item.fat }}</strong>
          <strong>{{ item.fat / 50 }}</strong>
        </li>
        <li>
          <strong>단백질 :{{ item.protain }}</strong>
          <strong>{{ item.protain / 50 }}</strong>
        </li>
        <li>
          <strong>탄수화물 :{{item.carbohydrate}}</strong>
          <strong>{{ item.carbohydrate / 328 }}</strong>
        </li>
        <li>
          <strong>나트륨 :{{item.salt}}</strong>
          <strong>{{ item.salt / 2 }}</strong>
        </li>
        <li>
          <strong>콜레스테롤 : {{item.cholesterol}}</strong>
          <strong>{{ item.cholesterol / 0.3 }}</strong>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import './FoodCard.scss'
import Vue from 'vue'

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
    foods: {
      validator: function (value: IFoodInfo[]) {
        // The value must match one of these strings
        let isOk = true
        let sampleItem: IFoodInfo = {
          title: '',
          image: '',
          weight: 123,
          kcal: 123,
          fat: 123,
          protain: 123,
          carbohydrate: 123,
          salt: 123,
          cholesterol: 123
        }
        for (var item in sampleItem) {
          console.log('비교필요', item)
          if (typeof value[0][item] !== typeof sampleItem[item]) {
            console.log('AFDSFDAFS')
            isOk = false
          }
        }
        return isOk
      }
    }
  },
  methods: {
    sayHi () {
      console.log('=============')
      console.log(this.$props)
      console.log('=============')
    }
  }
})
</script>
