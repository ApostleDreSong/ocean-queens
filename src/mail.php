<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE');

include('Mail.php'); // includes the PEAR Mail class, already on your server.

$_POST = json_decode(file_get_contents('php://input'), true);


if ($_POST){
    
    $username = 'info@oceanqueensmarine.com'; // your email address
    $password = 'democracy@777'; // your email address password
    
    $from = $_POST["email"];
    $to = 'info@oceanqueensmarine.com'; 
    $subject = $_POST['subject'];
    $body= "<b>".$_POST['name'].".</b> <br /> <br />".$_POST['message'];
    
    $headers = array ('From' => $from, 'To' => $to, 'Subject' => $subject, 'Content-Type'=> "text/html; charset=UTF-8\r\n"); // the email headers
    
    $smtp = Mail::factory('smtp', array ('host' =>'localhost', 'auth' => true, 'username' => $username, 'password' => $password, 'port' => '25')); // SMTP protocol with the username and password of an existing email account in your hosting account
    $mail = $smtp->send($to, $headers, $body); // sending the email
    
    if (PEAR::isError($mail)){

    header('Status: 500 ');
    //echo("<p>" . $mail->getMessage() . "</p>");
    echo json_encode(["failed"=>"failed"]);
    exit();
    
    } else {

    header('Status: 200');

    echo json_encode(["success"=>"success"]);
    exit();
    }
     
}else{

    header('Status: 500 ');
    
     echo 'This mesage was not posted';
     exit(); 
}  