<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="hideFirst" @mouseenter="showFirst">
        <h2 class="all">全部商品分类</h2>
        <transition name="slide">
          <div class="sort" v-show="isShowFirst">
            <div class="all-sort-list2">
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                :class="{ active: index === currentIndex }"
                @mouseenter="showSubList(index)"
              >
                <h3>
                  <!-- <router-link
                :to="`/search?categoryname=${c1.categoryName}&category1Id=${c1.categoryId}`"
                >{{ c1.categoryName }}</router-link
              > -->
                  <a href="javascript:;" @click="pushToCategory(c1)">{{
                    c1.categoryName
                  }}</a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl
                      class="fore"
                      v-for="c2 in c1.categoryChild"
                      :key="c2.categoryId"
                    >
                      <dt>
                        <!-- <router-link
                      :to="`/search?categoryname=${c2.categoryName}&category2Id=${c2.categoryId}`"
                      >{{ c2.categoryName }}</router-link
                    > -->
                        <a href="javascript:;" @click="pushToCategory(c2)">{{
                          c2.categoryName
                        }}</a>
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <!-- <router-link
                        :to="`/search?categoryname=${c3.categoryName}&category3Id=${c3.categoryId}`"
                        >{{ c3.categoryName }}</router-link
                      > -->
                          <a href="javascript:;" @click="pushToCategory(c3)">{{
                            c3.categoryName
                          }}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
// 引入mapstate
import { mapState } from "vuex";
// 引入loadash
// import _ from "lodash";
// 按需引入lodash
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    return {
      isShowFirst: false,
      currentIndex: -2,
    };
  },

  created() {
    if (this.$route.path === "/") {
      this.isShowFirst = true;
    }
  },
  methods: {
    pushToCategory(cx) {
      const params = this.$route.params;
      this.$router.push({
        name: "search",
        query: {
          categoryname: cx.categoryName,
          category1Id: cx.categoryId,
        },
        params,
      });
    },

    // 注意不能写箭头函数，这个this需要指向vc
    showSubList: throttle(
      function (index) {
        // 函数节流防止触发太多
        if (this.currentIndex !== -2) {
          this.currentIndex = index;
        }
      },
      100
      /* { trailing: false } // 最后一次事件不进行延迟处理 */
    ),
    // 显示一级列表
    showFirst() {
      this.currentIndex = -1;
      this.isShowFirst = true;
    },
    //隐藏一级列表
    hideFirst() {
      this.currentIndex = -2;
      if (this.$route.path !== "/") {
        this.isShowFirst = false;
      }
    },
  },
  computed: {
    // categoryList() {
    //   return this.$store.state.home.categoryList;
    // },
    // ...mapState(["categoryList"]), // 注意多模块编程的写法不同于单模块的
    ...mapState({
      categoryList: (state) => {
        return state.home.categoryList; // 函数接受的是总状态，返回值作为计算属性值
      },
    }),
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      cursor: default;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      // 指定过渡样式
      &.slide-enter-active,
      &.slide-leave-active {
        transition: all, 0.3s;
      }
      // 指定进入时的初始状态，离开后的最终状态
      &.slide-enter,
      &.slide-leave-to {
        opacity: 0;
        height: 0;
      }
      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.active {
            background-color: #ccc;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>