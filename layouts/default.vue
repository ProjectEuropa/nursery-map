<template>
  <div>
    <the-header/>
    <nuxt/>
    <the-footer/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader'
import TheFooter from '@/components/TheFooter/TheFooter'

export default {
  components: { 
    TheHeader, 
    TheFooter
  }
}
</script>

// global
<style>
.container
{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

