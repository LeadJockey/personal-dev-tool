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
<p style="color:red">${msg}</p>
<#list 1..3 as x>
    <p style="background-color:orange">hello freemarker ${x}</p>
</#list>
</body>
</html>
