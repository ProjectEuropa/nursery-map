<template>
        <div>
            <h2 class="container">埼玉県八潮市の保育園MAP</h2>
            <div class="container search-content">
            <input type="text" id="address" placeholder="住所を入力してください" style="width:1000px;">
            <button type="button" class="pure-button" @click="search">検索</button>
        </div>
        <div class="container">
            <div id="map" class="container" style="width:1000px; height:800px"></div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
let ymap;
let geocoder;

export default {
  mounted() {
    ymap = new Y.Map("map", {
      configure: {
        doubleClickZoom: true,
        scrollWheelZoom: true,
        singleClickPan: true,
        dragging: true
      }
    });
    ymap.addControl(new Y.SliderZoomControlVertical());
    ymap.addControl(new Y.LayerSetControl());
    ymap.drawMap(new Y.LatLng(35.802631, 139.849636), 15, Y.LayerSetId.NORMAL);
    geocoder = new Y.GeoCoder();
    const contents = [
      {
        nursery: "八条保育所", //
        address: "八潮市大字八條1567番地"
      },
      {
        nursery: "伊草保育所",
        address: "八潮市大字伊草372番地"
      },
      {
        nursery: "中馬場保育所", //
        address: "八潮市中央三丁目29番地17"
      },
      {
        nursery: "南川崎保育所",
        address: "八潮市大字南川崎207番地1"
      },
      {
        nursery: "大曽根保育所", //
        address: "八潮市大字大曽根1518番地"
      },
      {
        nursery: "古新田保育所",
        address: "八潮市大字古新田10番地"
      },

      {
        nursery: "八潮ひまわり保育園", //
        address: "八潮市中央一丁目15番地5"
      },
      {
        nursery: "やしお花桃保育園", //
        address: "八潮市大字二丁目1067番地1"
      },
      {
        nursery: "けやきの森保育園やしお", //
        address: "八潮市大字垳161番地1"
      },
      {
        nursery: "八潮かえで保育園", //
        address: "八潮市大瀬二丁目1番地8"
      },
      {
        nursery: "やしおエンゼル保育園", //
        address: "八潮市八潮四丁目4番地6"
      },
      {
        nursery: "しおどめ保育園八潮駅北", //
        address: "八潮市大字木曽根438番地1"
      },
      {
        nursery: "八潮なないろ保育園", //
        address: "八潮市大字二丁目948番地1"
      },
      {
        nursery: "コビープリスクールやしおステーション", //
        address: "八潮市大瀬一丁目1番地1"
      },
      {
        nursery: "けやきの森保育園やしお桜園", //
        address: "八潮市大字垳127番地1"
      },
      {
        nursery: "八潮みひかり保育園",
        address: "八潮市大瀬三丁目2番地5"
      },
      {
        nursery: "みつもり保育園", //
        address: "八潮市大瀬四丁目3番地1"
      },
      {
        nursery: "認定こども園しおどめの森（保育園部）", //
        address: "八潮市大字木曽根1041番地2"
      }
    ];
    for (const value of contents) {
      var content = value.address;
      var request = { content: content };
      geocoder.execute(request, function(ydf) {
        if (ydf.features.length > 0) {
          ydf.features[0].bindInfoWindow(`${value.nursery}`);
          ymap.addFeatures(ydf.features);
        }
      });
    }
  },
  methods: {
    search: function() {
      const searchContent = document.getElementById("address").value;
      const searchRequest = { content: searchContent };
      geocoder.execute(searchRequest, function(ydf) {
        if (ydf.features.length > 0) {
          ydf.features[0].bindInfoWindow("住所：" + searchContent);
          ydf.features[0].icon.image =
            "https://s.yimg.jp/images/map/yy/images/icon/yy_aicon_06_32pix.gif";
          ymap.addFeatures(ydf.features);
          alert(searchContent + "をマップに追加しました。");
        }
      });
      document.getElementById("address").value = "";
    }
  }
};
</script>
