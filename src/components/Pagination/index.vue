<template>
  <div class="pag-container">
    <ul class="pag-ul">
      <a
        class="pag-control"
        href="javascript:;"
        :class="{ disabled: myCurrentPage === 1 }"
        @click="setCurrentPage(myCurrentPage - 1)"
        >«上一页</a
      >
      <li class="pag-li" v-if="startEnd.start !== 1" @click="setCurrentPage(1)">
        1
      </li>
      <li class="pag-li pag-other" v-if="startEnd.start > 2">...</li>
      <li
        class="pag-li"
        v-for="item in startEndArr"
        :key="item"
        :class="{ current: item === myCurrentPage }"
        @click="setCurrentPage(item)"
      >
        {{ item }}
      </li>
      <li class="pag-li pag-other" v-if="startEnd.end < totalPages - 1">...</li>
      <a
        class="pag-control"
        href="javascript:;"
        :class="{ disabled: myCurrentPage === totalPages }"
        @click="setCurrentPage(myCurrentPage + 1)"
        >下一页»</a
      >
    </ul>
    <div class="totalPage" v-if="startEnd.end < totalPages">
      共{{ totalPages }}页
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      myCurrentPage: this.currentPage || 1,
    };
  },
  props: {
    currentPage: {
      // 当前页码
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    showPageNo: {
      type: Number,
      default: 5,
      //   要求该值必须传入奇数
      validator: function (value) {
        return value % 2 === 1;
      },
    },
  },
  computed: {
    totalPages() {
      const { total, pageSize } = this;
      return Math.ceil(total / pageSize);
    },

    // 开始页码与结束页码
    startEnd() {
      let start, end;
      const { currentPage, showPageNo, totalPages } = this;
      // 计算start与end
      start = currentPage - Math.floor(showPageNo / 2);
      if (start < 1) {
        start = 1;
      }
      end = start + showPageNo - 1;
      if (end > totalPages) {
        end = totalPages;
        start = end - showPageNo + 1;
        if (start < 1) {
          start = 1;
        }
      }
      return { start, end };
    },
    startEndArr() {
      let arr = [];
      const { start, end } = this.startEnd;
      for (let page = start; page <= end; page++) {
        arr.push(page);
      }
      return arr;
    },
  },
  methods: {
    // 设置当前新的页码
    setCurrentPage(page) {
      if (page === this.myCurrentPage) {
        return;
      }
      this.myCurrentPage = page;
      this.$emit("currentChange", page);
    },
  },
};
</script>

<style lang="less" scoped>
.pag-container {
  position: relative;
  width: 1200px;
  margin-bottom: 20px;
  .totalPage {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 25%;
    display: inline-block;
  }
  .pag-ul {
    display: flex;
    position: relative;
    left: 50%;
    width: 490px;
    height: 42px;
    font-size: 14px;
    line-height: 42px;
    text-align: center;
    justify-content: space-between;
    transform: translateX(-50%);

    .pag-li {
      margin-left: -1px;
      cursor: pointer;
      width: (100%/6);
      display: inline-block;
      border: 1px solid #e0e9ee;
      &.pag-li:hover {
        color: #e0e9ee;
      }
    }
    .current {
      color: #cf392b;
      border-top: none;
      border-bottom: none;
    }
    .pag-other {
      border-top: none;
      border-bottom: none;
    }
    .pag-control {
      margin-left: -1px;
      display: inline-block;
      width: 120px;
      border: 1px solid #e0e9ee;
      background-color: #fafafa;
    }
    a {
      cursor: pointer;
    }
    .disabled {
      pointer-events: none;
      opacity: 0.5; /*透明度50%*/
    }
  }
}
</style>