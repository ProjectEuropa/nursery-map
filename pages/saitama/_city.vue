<template>
  <div>
    <h2 class="container">埼玉県{{cityName}}の保育園MAP</h2>
    <div class="container search-content">
      <input type="text" id="address" placeholder="住所を入力してください">
      <button type="button" class="pure-button" @click="this.searchPoint">検索</button>
    </div>
    <div class="container map-area">
      <div id="map"></div>
    </div>
    <h3 class="container">{{cityName}}の保育園情報一覧</h3>
    <table class="pure-table pure-table-bordered center-table">
      <thead>
        <tr><th>保育園名</th><th>住所</th><th>ホームページリンク</th></tr>
      </thead>
      <tbody>
        <tr v-for="data in nurseryDatas" v-bind:key="data.nursery">
          <td>
            {{ data.nursery }}
          </td>
          <td>
            {{data.address}}
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
      nurseryDatas: [],
      cityName:''
    };
  },
  mounted() {
    let pathArray = window.location.pathname.split('/');
    axios.get(`/json/${pathArray[1]}/${pathArray[2]}.json`).then(res => {
      this.nurseryDatas = res.data.nursery_datas;
      this.cityName = res.data.city_name_ja;
      this.setMap(this.nurseryDatas, res.data.xy_point);
    });
  }
};
</script>
