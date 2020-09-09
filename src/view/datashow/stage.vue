<template>
    <div class="stage-box">
        <p>阶段展示</p>
        <div class="stage">
            <div class="stage-time">
                <div class="time" v-for="(item,index) in timeList" :key="index" :style="index !== 0? 'margin-left:16px':''">
                    {{item}}
                </div>
            </div>
            <div class="stage-content">
                <div class="content" v-for="(item,index) in stageList" :key="item.id + index">
                    {{item.name}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            stageList:[
                {
                    name:'第一阶段',
                    startTime:'2020-01-01',
                    endTime:'2020-02-02',
                    id:1
                },
                {
                    name:'第二阶段',
                    startTime:'2020-02-03',
                    endTime:'2020-03-03',
                    id:2
                },
                {
                    name:'第三阶段',
                    startTime:'2020-03-04',
                    endTime:'2020-04-04',
                    id:3
                },
                {
                    name:'第四阶段',
                    startTime:'2020-04-05',
                    endTime:'2020-05-05',
                    id:4
                },
                {
                    name:'第五阶段',
                    startTime:'2020-05-06',
                    endTime:'2020-06-06',
                    id:5
                }
            ],
            timeList:[]
        }
    },
    mounted(){
        this.handleData()
    },
    methods:{
        handleData(){
            /*
            * 前一个阶段的结束时间即时后一阶段的开始时间
            */
           this.stageList.forEach(item=>{
               this.timeList.push(item.startTime)
           })
           this.timeList.push(this.stageList[this.stageList.length -1].endTime)
        }   
    }
}
</script>
<style lang="less" scoped>
.stage-box {
    width: 1000px;
    height: auto;
    margin: 0 auto;
    background: #FFF;
    margin-top: 100px;
    .stage {
        display: flex;
        justify-content: center;
        margin-top: 50px;
        flex-direction: column;
        align-items: center;
        .stage-content {
            display: flex;
            margin-top: 30px;
            .content {
                width: 100px;
                height: 40px;
                background: #666;
                text-align: center;
                line-height: 40px;
                font-size: 15px;
                color: honeydew;
                margin-right:40px;
            }
        }
        .stage-time {
            display: flex;
            margin-left: -50px;
            .time {
                font-size: 13px;
                width: 100px;
                text-align: center;
                margin-right: 20px;
            }
        }
    }
}
</style>