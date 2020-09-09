<template>
  <div class="map-box">
    <p>百度地图</p>
    <div class="baidumap" id="allmap"></div>
  </div>
</template>
<script>
import BMap from "BMap";
import BMapSymbolSHAPEPOINT from "BMap_Symbol_SHAPE_POINT";
export default {
  data() {
    return {};
  },
  mounted() {
    this.baiduMap();
  },
  methods: {
    baiduMap() {
      var map = new BMap.Map("allmap"); //创建实例
      var point = new BMap.Point(117.378627, 31.924022, 11); // 初始化地图，设置中心点坐标和地图级别
      map.centerAndZoom(point, 12);
      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
      //   添加地图类型控件
      map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP],
        })
      );
      map.setCurrentCity("合肥");
      map.enableScrollWheelZoom(true);
    },
  },
};
</script>
<style lang="less" scoped>
.map-box {
  .baidumap {
    width: 100%;
    height: 500px;
    /deep/.anchorBL {
      display: none !important;
    }
    /deep/.BMap_cpyCtrl {
      display: none !important;
    }
  }
}
</style>