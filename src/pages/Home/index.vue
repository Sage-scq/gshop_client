<template>
  <div class="home">
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <Like />
    <Rank />
    <Floor v-for="floor in floorsList" :key="floor.id" :floor="floor" />
    <Brand />
  </div>
</template>

<script>
import ListContainer from "./ListContainer";
import TodayRecommend from "./TodayRecommend";
import Brand from "./Brand/Brand.vue";
import Floor from "./Floor/Floor.vue";
import Rank from "./Rank/Rank.vue";
import Like from "./Like/Like.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: { ListContainer, TodayRecommend, Brand, Floor, Rank, Like },
  mounted() {
    this.$store.dispatch("getRecommendsList");
    this.$store.dispatch("getFloorsList");
  },
  computed: {
    ...mapState({
      floorsList: (state) => {
        return state.home.floorsList; // 函数接受的是总状态，返回值作为计算属性值
      },
    }),
  },
};
</script>

<style lang="less" scoped>
</style>