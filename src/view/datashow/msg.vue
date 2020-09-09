<template>
    <div class="msg-box">
        <p>管理员信息</p>
        <div class="msg-content">
            <div class="content">
                <label>姓名：</label>
                <span>admin</span>
            </div>
            <div class="content">
                <label>登录时间：</label>
                <span>2020-08-21</span>
            </div>
            <div class="content">
                <label>管理员权限：</label>
                <span>管理员</span>
            </div>
            <div class="content">
                <label>管理员ID：</label>
                <span>11</span>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    }
}
</script>
<style lang="less" scoped>
.msg-box {
    width: 700px;
    height: auto;
    background: #f9fafc;
    margin: 0 auto;
    margin-top: 100px;
    .msg-content {
        .content {
            margin: 20px 0;
            label, span{
                color: #666;
                font-size: 18px;
            }
            label {
                display: inline-block;
                width: 150px;
                text-align: right;
            }
            span {
                display: inline-block;
                width: 200px;
                text-align: left;
            }
        }
    }
}
</style>