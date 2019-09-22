export default {
  addMeal: (context, props) => {
    console.log("추가액션실행");
    return context.commit("addMeal", { ...props });
  },
  removeMeal: (context, props) => {
    return context.commit("removeMeal", { ...props });
  }
};
