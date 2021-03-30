<template>
  <div class="layout">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref, reactive, watch, computed, toRefs } from 'vue'
</script>

<style scoped lang="less">
.layout {
  padding: 16px;
}
</style>
