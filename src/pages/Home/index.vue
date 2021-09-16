<template>
  <div class="home">
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <Like />
    <Rank />
    <Floor />
    <Floor />
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
export default {
  name: "Home",
  components: { ListContainer, TodayRecommend, Brand, Floor, Rank, Like },
};
</script>

<style lang="less" scoped>
</style>