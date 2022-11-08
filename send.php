<?php
$name = str_replace("\n.", "\n..",$_POST["name"]);
$phone = str_replace("\n.", "\n..",$_POST["phone"]);
$company = str_replace("\n.", "\n..",$_POST["company"]);
$email = str_replace("\n.", "\n..",$_POST["email"]);
$time = str_replace("\n.", "\n..",$_POST["time"]);
$string = 'Имя: '.$name.'<br>Телефон: '.$phone.'<br>Компания: '.$company.'<br>Почта: '.$email.'<br>Время:'.$time;
$headers="From: IT-park <no-reply@itpark-rameev.ru>\nContent-Type: text/html; charset=\"utf-8\"\n";
if (!empty($name) && !empty($phone) && !empty($company) && !empty($email) && !empty($time)) {
    mail('residents.it@tatar.ru, olga.ch@tatar.ru, Rinal.Sh@tatar.ru, support@imperium.im, mikhov.danil@yandex.ru, info@itpark-rameev.ru', 'Новая заявка!', $string, $headers);
} else {
    echo 'Ошибка, одно из полей оказалось пустым.';
}