<template>
  <div class="container">
    <van-button type="primary" @click="submitLogin">登录</van-button>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { login } from '@/api/login'
import { setAccessToken, setRefreshToken } from '@/utils/auth'

const Router = useRouter()
const { query } = useRoute()

const submitLogin = async () => {
  const data = {
    name: 'lwp2333',
    password: 'jujingyi3344',
  }
  const res = await login(data).catch(err => {
    console.log(err)
  })
  if (res) {
    const { accessToken, refreshToken } = res
    setAccessToken(accessToken)
    setRefreshToken(refreshToken)
    Router.push({
      path: query.redirectUrl || '/',
    })
  }
}
</script>

<style scoped lang="less"></style>
