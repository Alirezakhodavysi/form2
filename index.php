<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

    if(isset($_POST['Username'])
    And isset($_POST['tel']))

   
    { 
        $Username =$_POST['Username']
        $telephon =$_POST['tel']
        echo($Username);
    }
     
    else{
        echo('is empty')
    }

















     ?>
     
</body>
</html>