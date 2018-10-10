<!doctype html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>honey home</title>
    <link rel="stylesheet" href="/css/reset.css">
    <link rel="stylesheet" href="/css/index.css">
</head>
<body>

<div class="wrap_tool">
    <div class="main_tool">
        <div class="cont_main cont_image">
            <div class="cover_image">
                <img src="/image/img_main.png" class="img_main" alt="honey home">
            </div>
        </div>
        <div class="cont_main cont_info">
            <strong class="tit_info">HELLO BEE</strong>
            <p class="desc_info">my first node.js project</p>
            <#if isLogin>
                <a href="/user/logout" class="btn_log">로그아웃</a>
            <#else>
                <a href="/user/login" class="btn_log">로그인</a>
            </#if>
        </div>
    </div>

</div>
<script src="/socket.io/socket.io.js" type="text/javascript" charset="utf-8"></script>
<script>
    const socket = io();
</script>
</body>
</html>
