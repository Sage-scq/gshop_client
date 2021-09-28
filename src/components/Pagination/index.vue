<template>
  <div class="pag-container">
    <ul class="pag-ul">
      <a class="pag-control" href="javascript:;">«上一页</a>
      <li class="pag-li current">1</li>
      <li class="pag-li">2</li>
      <li class="pag-li">3</li>
      <li class="pag-li">4</li>
      <li class="pag-li">5</li>
      <li class="pag-li pag-other">...</li>
      <a class="pag-control" href="javascript:;">下一页»</a>
    </ul>
    <div class="totalPage">共10页</div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["currentPage"],
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
  }
}
</style>