module.exports =  {
    categoury: resolve=> (require(["@/view/echarts/category.vue"],resolve)),

    bar:resolve=>(require(["@/view/echarts/bar.vue"],resolve)),

    add:resolve=>(require(["@/view/operate/add.vue"],resolve)),
    
    login:resolve=>(require(['@/view/login.vue'],resolve)),

    map:resolve=>(require(['@/view/visible/map/index.vue'],resolve)),
    playboard:resolve=>(require(['@/view/playboard.vue'],resolve)),
    baidu:resolve=>(require(['@/view/visible/map/baidu.vue'],resolve)),
    gaode:resolve=>(require(['@/view/visible/map/gaode.vue'],resolve)),
    tx:resolve=>(require(['@/view/visible/map/tengxun.vue'],resolve)),
    gannt:resolve=>(require(['@/view/datashow/gannt.vue'],resolve)),
    list:resolve=>(require(['@/view/datashow/list.vue'],resolve)),
    msg:resolve=>(require(['@/view/datashow/msg.vue'],resolve)),
    stage:resolve=>(require(['@/view/datashow/stage.vue'],resolve)),

    addList:resolve=>(require(['@/view/datashow/addlist.vue'],resolve)),
}