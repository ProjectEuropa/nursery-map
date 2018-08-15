<template>
  <div>
    <h2 class="container">埼玉県八潮市の保育園MAP</h2>
    <div class="container search-content">
      <input type="text" id="address" placeholder="住所を入力してください">
      <button type="button" class="pure-button" @click="this.searchPoint">検索</button>
    </div>
    <div class="container map-area">
      <div id="map"></div>
    </div>
    <h3 class="container">保育園情報一覧</h3>
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
export default {
  data() {
    return {
      nurseryDatas: []
    };
  },
  mounted() {
    const contents = [
      {
        nursery: "八条保育所", //
        address: "八潮市大字八條1567番地",
        url:
          "https://www.city.yashio.lg.jp/kosodate/kosodate/hoikujo/30-hoiku-sinsei.files/hoiku30-6.pdf"
      },
      {
        nursery: "伊草保育所",
        address: "八潮市大字伊草372番地",
        url:
          "https://www.city.yashio.lg.jp/kosodate/kosodate/hoikujo/30-hoiku-sinsei.files/hoiku30-6.pdf"
      },
      {
        nursery: "中馬場保育所", //
        address: "八潮市中央三丁目29番地17",
        url:
          "https://www.city.yashio.lg.jp/kosodate/kosodate/hoikujo/30-hoiku-sinsei.files/hoiku30-6.pdf"
      },
      {
        nursery: "南川崎保育所",
        address: "八潮市大字南川崎207番地1",
        url:
          "https://www.city.yashio.lg.jp/kosodate/kosodate/hoikujo/30-hoiku-sinsei.files/hoiku30-6.pdf"
      },
      {
        nursery: "大曽根保育所", //
        address: "八潮市大字大曽根1518番地",
        url:
          "https://www.city.yashio.lg.jp/kosodate/kosodate/hoikujo/30-hoiku-sinsei.files/hoiku30-6.pdf"
      },
      {
        nursery: "古新田保育所",
        address: "八潮市大字古新田10番地",
        url:
          "https://www.city.yashio.lg.jp/kosodate/kosodate/hoikujo/30-hoiku-sinsei.files/hoiku30-6.pdf"
      },

      {
        nursery: "八潮ひまわり保育園", //
        address: "八潮市中央一丁目15番地5",
        url: "https://www.city.yashio.lg.jp/kosodate/kosodate/hoikujo/30-hoiku-sinsei.files/hoiku30-7.pdf"
      },
      {
        nursery: "やしお花桃保育園", //
        address: "八潮市大字二丁目1067番地1",
        url: "https://www.city.yashio.lg.jp/kosodate/kosodate/hoikujo/30-hoiku-sinsei.files/hoiku30-7.pdf"
      },
      {
        nursery: "けやきの森保育園やしお", //
        address: "八潮市大字垳161番地1",
        url: "https://www.city.yashio.lg.jp/kosodate/kosodate/hoikujo/30-hoiku-sinsei.files/hoiku30-7.pdf"
      },
      {
        nursery: "八潮かえで保育園", //
        address: "八潮市大瀬二丁目1番地8",
        url: "https://www.city.yashio.lg.jp/kosodate/kosodate/hoikujo/30-hoiku-sinsei.files/hoiku30-7.pdf"
      },
      {
        nursery: "やしおエンゼル保育園", //
        address: "八潮市八潮四丁目4番地6",
        url: "https://www.city.yashio.lg.jp/kosodate/kosodate/hoikujo/30-hoiku-sinsei.files/hoiku30-7.pdf"
      },
      {
        nursery: "しおどめ保育園八潮駅北", //
        address: "八潮市大字木曽根438番地1",
        url: "https://www.city.yashio.lg.jp/kosodate/kosodate/hoikujo/30-hoiku-sinsei.files/hoiku30-7.pdf"
      },
      {
        nursery: "八潮なないろ保育園", //
        address: "八潮市大字二丁目948番地1",
        url: ""
      },
      {
        nursery: "コビープリスクールやしおステーション", //
        address: "八潮市大瀬一丁目1番地1",
        url: "http://www.coby.jp/institution/post-22.html"
      },
      {
        nursery: "けやきの森保育園やしお桜園", //
        address: "八潮市垳127-1",
        url: "https://www.keyakinomori.ed.jp/ens/%E3%81%91%E3%82%84%E3%81%8D%E3%81%AE%E6%A3%AE%E4%BF%9D%E8%82%B2%E5%9C%92%E3%82%84%E3%81%97%E3%81%8A%E6%A1%9C%E5%9C%92/"
      },
      {
        nursery: "八潮みひかり保育園",
        address: "八潮市大瀬三丁目2番地5",
        url: "http://1p-web.net/mihikari-hoiku2/"
      },
      {
        nursery: "みつもり保育園", //
        address: "八潮市大瀬四丁目3番地1",
        url: ""
      },
      {
        nursery: "認定こども園しおどめの森（保育園部）", //
        address: "八潮市大字木曽根1041番地2",
        url: "http://www.gakuhou-shibagakuen.ac.jp/"
      }
    ];
    this.setMap(contents);
    this.nurseryDatas = contents;
  }
};
</script>
