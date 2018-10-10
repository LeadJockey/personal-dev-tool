<!doctype html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<form action="/team/add" method="post" name="teamdata" accept-charset="utf-8">
    <fieldset>
        <legend>add team member</legend>
        <#if userList?size gt 0>
            <#list userList as user>
                <input type="checkbox" name="member${user?index}" value="${user.name}">
                <label for="">${user.name}</label><br>
            </#list>
        </#if>
        <input type="submit" value="Submit">
    </fieldset>
</form>
</body>
</html>
