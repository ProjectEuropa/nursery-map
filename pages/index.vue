<template>
  <div>
    <h1 class="container">{{ data.message }}</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData () {
    let data = await axios.get('/api')
    console.log(data)
    return data.data
  }
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
