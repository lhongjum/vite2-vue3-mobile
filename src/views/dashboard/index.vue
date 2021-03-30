<template>
  <div class="dashboard">
    <van-button type="primary">工作台</van-button>
    <div class="remBox"></div>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" />
    </van-cell-group>
    <span class="text"> 爱上电脑上你打第哦啊杀死哦都会牵动枫 </span>
  </div>
</template>

<script setup></script>
<style lang="less" scoped>
.dashboard {
  width: 100%;
  height: 100%;
  .remBox {
    width: 320px;
    height: 320px;
    border: 1px dashed greenyellow;
  }
  .text {
    font-size: 14px;
    line-height: 16px;
  }
}
</style>
