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
        <legend>add todo</legend>
        <label for="">부서</label>
        <input type="text" name="department" placeholder="페이/뱅크/헤어샵">
        <label for="">이름</label>
        <input type="text" name="name" placeholder="5월 사전예약페이지">
        <label for="">작업분류</label>
        <input type="text" name="type" placeholder="프로모션">
        <label for="">상태</label>
        <input type="text" name="state" placeholder="setup/ready/progress/done">
        <label for="">담당자</label>
        <input type="text" name="member" placeholder="">
        <label for="">일정</label>
        <input type="text" name="schedule" placeholder="">
        <label for="">링크</label>
        <input type="text" name="link" placeholder="">
        <label for="">소스</label>
        <input type="text" name="source" placeholder="">
        <label for="">이슈</label>
        <input type="text" name="issue" placeholder="">
        <input type="submit" value="Submit">
    </fieldset>
</form>
</body>
</html>
