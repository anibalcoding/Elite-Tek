<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

$to = 'EliteTekSoccerAcademy@yahoo.com';

$name    = htmlspecialchars(strip_tags(trim($_POST['name']    ?? '')));
$email   = trim($_POST['email']   ?? '');
$phone   = htmlspecialchars(strip_tags(trim($_POST['phone']   ?? '')));
$message = htmlspecialchars(strip_tags(trim($_POST['message'] ?? '')));

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Name, email, and message are required.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

$email = filter_var($email, FILTER_SANITIZE_EMAIL);

$subject  = 'Elite Tek — New message from ' . $name;

$body  = "Name:    $name\n";
$body .= "Email:   $email\n";
if ($phone) $body .= "Phone:   $phone\n";
$body .= "\nMessage:\n$message\n";

$headers  = "From: noreply@elitetek.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (@mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => "Thanks, $name! We’ll be in touch soon."]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Something went wrong. Please call us directly at (469) 625-6553.']);
}
