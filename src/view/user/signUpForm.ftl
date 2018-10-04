<!doctype html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>createForm</title>
</head>
<body>
<form action="/user/signup" method="post" name="userdata" accept-charset="utf-8">
    <fieldset>
        <legend>Sign Up</legend>
        <label for="" id="username">Username</label>
        <input type="text" name="username" placeholder="john9000" autocomplete="off">
        <label for="">Password</label>
        <input type="password" name="password" placeholder="********" autocomplete="off">
        <input type="submit" value="Sign Up" autocomplete="off">
    </fieldset>
</form>
</body>
</html>
