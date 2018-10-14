<template>
  <div>
    <h2 class="container">埼玉県{{cityName}}の{{facility}}MAP</h2>
    <div class="container search-content">
      <input type="text" id="address" placeholder="住所を入力してください">
      <button type="button" class="pure-button" @click="this.searchPoint">検索</button>
    </div>
    <div class="container map-area">
      <div id="map"></div>
    </div>
    <h3 class="container">{{cityName}}の{{facility}}情報一覧</h3>
    <table class="pure-table pure-table-bordered center-table">
      <thead>
        <tr><th>{{facility}}名</th><th>住所</th><th>ホームページリンク</th></tr>
      </thead>
      <tbody>
        <tr v-for="data in mapDatas" v-bind:key="data.nursery">
          <td>
            {{ data.nursery }}
          </td>
          <td>
            {{ data.address }}
          </td>
          <td>
            <a v-if="data.url != ''" :href="data.url" target="_blank">{{data.nursery}}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      mapDatas: [],
      cityName:'',
      facility:''
    };
  },
  mounted() {
    let pathArray = window.location.pathname.split('/');
    if (pathArray[1] === 'nursery') {
      this.facility = '保育園';
    } else {
      this.facility = '幼稚園';
    }
    axios.get(`/json/${pathArray[1]}/${pathArray[2]}/${pathArray[3]}.json`).then(res => {
      this.mapDatas = res.data.nursery_datas;
      this.cityName = res.data.city_name_ja;
      this.setMap(this.mapDatas, res.data.xy_point);
    });
  }
};
</script>

<style scoped>
table {
  margin-bottom: 10px;
}
</style>
