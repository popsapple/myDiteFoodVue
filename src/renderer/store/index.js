import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  // counter 라는 state 속성을 추가
  state: {
    selectedFoods: {
      morning: [],
      lunch: [],
      dinner: []
    }
  },
  // 값을 가져오게만 할 수 있도록 처리
  getters: {
    getMealList(state) {
      return state.selectedFoods;
    }
  },
  // 값 변경하는 함수
  mutations: {
    addMeal(state, props) {
      state.selectedFoods[props.meal].push(props.item);
      console.log("늘어난거확인", state);
      return state.selectedFoods[props.meal];
    },
    removeMeal(state, props) {
      state.selectedFoods[props.meal].splice(props.index, 1);
      return state.selectedFoods[props.meal];
    }
  },
  // 반 변경 함수 호출! view단에서 호출할 때 이 actions를 통해 호출하도록 패턴을 강제함
  actions
});
