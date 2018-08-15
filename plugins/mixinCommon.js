import Vue from 'vue'
var ymap;
var geocoder;
Vue.mixin({
    methods: {
        setMap(contents, xyPoint) {
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
            ymap.drawMap(new Y.LatLng(xyPoint.x, xyPoint.y), 15, Y.LayerSetId.NORMAL);
            geocoder = new Y.GeoCoder();
            for (const value of contents) {
                var content = value.address;
                var request = { 'content': content };
                geocoder.execute(request, function (ydf) {
                    if (ydf.features.length > 0) {
                        ydf.features[0].bindInfoWindow(`${value.nursery}`);
                        ymap.addFeatures(ydf.features);
                    }
                });
            }
        },
        searchPoint() {
            const searchContent = document.getElementById("address").value;
            const searchRequest = { content: searchContent };
            geocoder.execute(searchRequest, function (ydf) {
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
})