<?php 

$name = $_POST['name'];
$email = $_POST['Email'];
$subject = $_POST['Subject'];
$message = $_POST['Message'];

if (isset($_POST['submit'])) {
    $to = "debrahrwyatt@gmail.com"; 
    $from = $email;
    $headers = "From:" . $name;

    if (mail($to, $subject, $message, $headers)) {
        echo "Mail Sent.";
    }
    else {
        echo "failed";
    }
}

?>