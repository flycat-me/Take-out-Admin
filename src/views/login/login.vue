<template>
<div id="login">
    <h2 class="loginbox-title">用户名账号登录</h2>
    <div class="g-bd">
    </div>
</div>
</template>

<script>
export default {
    name: 'login'

}
</script>

<style>
#login {
    width: 400px;
    height: 540px;
    background-color: gray;

}
.loginbox-title {
    padding: 40px 0 0;
    color: #333;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
}
h2 {
    display: block;
    font-weight: bold;
}
.g-bd {
    width: 400px;
    height: 302px;
    overflow: visible;
    position: relative;
    border-radius: 4px;
    background: #fff;
}
</style>
