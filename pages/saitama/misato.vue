<template>
  <div>
    <h2 class="container">埼玉県三郷市の保育園MAP</h2>
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
        nursery: "上口保育所", //
        address: "三郷市上口1-208",
        url:
          "http://www.city.misato.lg.jp/8163.htm"
      },
      {
        nursery: "丹後保育所",
        address: "三郷市早稲田8-7-5",
        url:
          "http://www.city.misato.lg.jp/8164.htm"
      },
      {
        nursery: "高州保育所", //
        address: "三郷市高州2-259-2",
        url:
          "http://www.city.misato.lg.jp/8165.htm"
      },
      {
        nursery: "さくら保育所",
        address: "三郷市彦成4-4-16",
        url:
          "http://www.city.misato.lg.jp/8138.htm"
      },
      {
        nursery: "彦成保育所", //
        address: "三郷市彦成2-278",
        url:
          "http://www.city.misato.lg.jp/8166.htm"
      },
      {
        nursery: "早稲田保育所",
        address: "三郷市早稲田3-18-13",
        url:
          "http://www.city.misato.lg.jp/8167.htm"
      },

      {
        nursery: "つくし保育園", //
        address: "三郷市幸房702",
        url: "http://www.tukushi-hoikuen.com/"
      },
      {
        nursery: "コビープリスクールみさとながとろ", //
        address: "三郷市鷹野1-415",
        url: "http://www.coby.jp/institution/post-15.html"
      },
      {
        nursery: "三郷ひだまり保育園", //
        address: "三郷市栄1-252-1",
        url: "http://www.it-service.co.jp/cgi-local/multi_view.cgi?GROUP=00000&TNO=8900&right_menu=02&menw_flg=1"
      },
      {
        nursery: "みさとしらゆり保育園", //
        address: "三郷市中央1-2-1-216",
        url: "http://misato-shirayuri.com/"
      },
      {
        nursery: "みさとこころ保育園", //
        address: "三郷市三郷2-7-7",
        url: "https://www.joyku.net/nursery/1065"
      },
      {
        nursery: "美咲保育園", //
        address: "三郷市彦成3-94",
        url: "http://misakiho.com/"
      },
      {
        nursery: "レイモンド戸ヶ崎保育園", //
        address: "三郷市戸ヶ崎2400-1",
        url: "https://www.lemonkai.or.jp/school/nursary/leimond-togasaki-hoikuen/"
      },
      {
        nursery: "レイモンド新三郷保育園", //
        address: "三郷市半田299-1",
        url: "https://www.lemonkai.or.jp/school/nursary/leimond-shinmisato-hoikuen/"
      },
      {
        nursery: "コビープリスクールみさととがさき", //
        address: "三郷市戸ヶ崎3-227",
        url: "http://www.coby.jp/institution/post-21.html"
      },
      {
        nursery: "コビープリスクールみさとたかの",
        address: "三郷市鷹野3-387",
        url: "http://www.coby.jp/institution/post-34.html"
      },
      {
        nursery: "みさとしらゆり第２保育園", //
        address: "三郷市中央2-29",
        url: "http://misato-shirayuri.com/"
      },
      {
        nursery: "わせだっこ中央保育園", //
        address: "三郷市谷中33-2",
        url: "https://ameblo.jp/wasewasechuchu/"
      }
    ];
    this.setMap(contents);
    this.nurseryDatas = contents;
  }
};
</script>
