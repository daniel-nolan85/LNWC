<?php
include 'config.php';

function sanitize($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Invalid request method.']);
    exit;
}

$firstName = sanitize($_POST['firstName'] ?? '');
$lastName = sanitize($_POST['lastName'] ?? '');
$email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$comments = sanitize($_POST['comments'] ?? '');
$recaptcha_response = $_POST['g-recaptcha-response'] ?? '';

if (!$firstName || !$lastName || !$email || !$comments) {
    echo json_encode(['error' => 'Please fill in all required fields correctly.']);
    exit;
}

if (!$recaptcha_response) {
    echo json_encode(['error' => 'Please complete the reCAPTCHA.']);
    exit;
}

$verify_url = 'https://www.google.com/recaptcha/api/siteverify';
$data = [
    'secret' => $recaptcha_secret,
    'response' => $recaptcha_response,
    'remoteip' => $_SERVER['REMOTE_ADDR']
];

$options = [
    'http' => [
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data),
    ],
];

$context  = stream_context_create($options);
$response = file_get_contents($verify_url, false, $context);
$captcha_success = json_decode($response, true);

if (!$captcha_success['success']) {
    echo json_encode(['error' => 'reCAPTCHA verification failed.']);
    exit;
}

$to = 'danielnolan85@yahoo.com';
$subject = "New Contact Form Submission from $firstName $lastName";

$message = "You have received a new message from your website contact form:\n\n";
$message .= "Name: $firstName $lastName\n";
$message .= "Email: $email\n\n";
$message .= "Comments:\n$comments\n";

$headers = "From: no-reply@tawnys11.sg-host.com\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => 'Form submitted successfully!']);
} else {
    echo json_encode(['error' => 'Failed to send email. Please try again later.']);
}

exit;
