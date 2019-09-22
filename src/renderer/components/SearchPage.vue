<template>
  <section class="App">
    <hgroup>
      <h2>오늘 뭐 먹지</h2>
      <h3>하단 검색을 통해 나온 음식들 중에서 먹고픈걸 골라봅시다</h3>
    </hgroup>
    <input type="text" v-on:input="searchTerm" />
    <FoodCard v-bind:foods="TestInfo" />
    <MealList
      v-on:change-menu="changeMenu"
      v-bind:openmenu="opmeMenu"
      v-bind:time="'morning'"
      v-bind:korTime="'아침'"
    />
    <MealList
      v-on:change-menu="changeMenu"
      v-bind:openmenu="opmeMenu"
      v-bind:time="'lunch'"
      v-bind:korTime="'점심'"
    />
    <MealList
      v-on:change-menu="changeMenu"
      v-bind:openmenu="opmeMenu"
      v-bind:time="'dinner'"
      v-bind:korTime="'저녁'"
    />
  </section>
</template>
<script lang="ts">
import FoodCard from "./FoodCard/FoodCard.vue";
import MealList from "./MealList/MealList.vue";
import Vue from "vue";
import axios from "axios";
import "./SearchPage.scss";

const XmlReader = require("xml-reader");
const XmlSearched: any[] = [
  {
    name: "김치김밥",
    weight: 100,
    kcal: 100,
    carbon: 10,
    protein: 10,
    fat: 20,
    fiber: 10,
    water: 30,
    imgurl: "sample_food"
  }
];
const XmlKeyWord = "김치";
const opmeMenu = "김치";

export default Vue.extend({
  components: { FoodCard, MealList },
  data: () => {
    return {
      message: "Hello",
      TestInfo: XmlSearched,
      keyWord: XmlKeyWord,
      opmeMenu: opmeMenu
    };
  },
  methods: {
    changeMenu(menu: String) {
      console.log("이벤트전달받은건지", menu);
      this.$data.opmeMenu = menu;
    },
    searchTerm(event: any) {
      var queryParams = "/static/foods.xml";
      // creating from single ast
      var xq: any = "";
      axios.get(`${queryParams}`).then(result => {
        xq = XmlReader.parseSync(result.data);
        this.$data.kewWord = event.target.value;
        this.$data.TestInfo = [];
        setTimeout(() => {
          xq.children.forEach((node: any) => {
            if (
              this.$data.keyWord != "" &&
              node.children[0].children[0].value
                .trim()
                .indexOf(event.target.value) != -1 &&
              this.$data.TestInfo.length < 10
            ) {
              this.$data.TestInfo.push({
                name: node.children[0].children[0].value,
                weight: parseInt(node.children[1].children[0].value),
                kcal: parseInt(node.children[2].children[0].value),
                carbon: parseInt(node.children[3].children[0].value),
                protein: parseInt(node.children[4].children[0].value),
                fat: parseInt(node.children[5].children[0].value),
                fiber: parseInt(node.children[6].children[0].value),
                water: parseInt(node.children[7].children[0].value),
                imgurl: node.children[8].children[0].value
              });
            }
          });
        }, 100);
      });
    }
  },
  beforeMount() {}
});
</script>