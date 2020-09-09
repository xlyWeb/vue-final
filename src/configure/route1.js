module.exports = routeList = {
    categoury: resolve=> (require(["@/view/echarts/category.vue"],resolve)),
    bar:resolve=>(require(["@/view/echarts/bar.vue"],resolve)),
    add:resolve=>(require(["@/view/operate/add.vue"],resolve))
}