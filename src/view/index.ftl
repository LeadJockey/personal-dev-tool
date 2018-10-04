<!doctype html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>index</title>
</head>
<body>
<p>${msg}</p>
<#if isLogin>
<a href="/user/logout">로그아웃</a>
<#else>
<a href="/user">로그인</a>
</#if>

<script src="/socket.io/socket.io.js" type="text/javascript" charset="utf-8"></script>
<script>
    const socket = io();
</script>
</body>
</html>
