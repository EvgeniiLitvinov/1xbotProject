<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);

    $to = "sale@1xbot.kz"; // Замените на ваш email
    $subject = "Новая заявка с лендинга";
    $message = "Имя: $name\nТелефон: $phone\nEmail: $email";
    $headers = "From: voice-bot@1xbot.kz" . "\r\n" .
            	"Reply-To: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Сообщение отправлено успешно!";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
}
?>