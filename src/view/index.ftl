<!doctype html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>freemarker test</title>
</head>
<body>
<h2 style="color:red">${msg}</h2>
<#list 1..5 as x>
    <p style="background-color:orange">hello freemarker ${x}</p>
</#list>
<script src="/socket.io/socket.io.js" type="text/javascript" charset="utf-8"></script> <!-- 1 -->
<script>
    const socket = io();

</script>
</body>
</html>
