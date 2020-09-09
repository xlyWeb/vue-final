<template>
  <div class="gaode-map">
    <p>高德地图</p>
    <div class="amap-wrapper">
      <el-amap
        ref="map"
        vid="amapDemo"
        :amap-manager="amapManager"
        :center="center"
        :zoom="zoom"
        :plugin="plugin"
        :events="events"
        class="amap-demo"
      ></el-amap>
    </div>
  </div>
</template>
<script>
import VueAMap from 'vue-amap';
let amapManager = new VueAMap.AMapManager();
export default {
  data() {
    return {
      amapManager,
      zoom: 12,
      center: [117.378627, 31.924022],
      events: {
        init: (o) => {
          console.log(o.getCenter());
          console.log(this.$refs.map.$$getInstance());
          o.getCity((result) => {
            console.log(result);
          });
        },
        moveend: () => {},
        zoomchange: () => {},
        click: (e) => {
          alert("map clicked");
        },
      },
      plugin: [
        "ToolBar",
        {
          pName: "MapType",
          defaultType: 0,
          events: {
            init(o) {
              console.log(o);
            },
          },
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    getMap() {
      // amap vue component
      console.log(amapManager._componentMap);
      // gaode map instance
      console.log(amapManager._map);
    },
  },
};
</script>
<style lang="less" scoped>
.gaode-map {
  .amap-wrapper {
    width: 100%;
    height: 500px;
  }
}
</style>