<template>
  <div>
    <the-header/>
    <nuxt/>
    <the-footer/>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader/TheHeader";
import TheFooter from "@/components/TheFooter/TheFooter";

export default {
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

// global
<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#map {
  width: 1000px;
  height: 800px;
}

#address {
  width: 1000px;
}

.map-area {
  margin-bottom: 15px;
}

.center-table {
  margin: 0 auto;
}
</style>

