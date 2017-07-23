<?php
	header("Access-Control-Allow-Origin: *");
	if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
		header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
		exit();
	}
	header("Content-Type: application/json; charset=UTF-8");

    $post = json_decode(file_get_contents('php://input'), false);
	
	$to      = 'softdev.zeus@gmail.com';
	$subject = 'We need pool service from you.';
	
	$headers = 'From: Pool Service Request <' . strip_tags($post->email) . ">\r\n";
	$headers .= 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'Reply-To: ' . strip_tags($post->email) . "\r\n";
	
	$message = '<html><body>';
	$message .= '<h1>Pool Service Request</h1>';
	$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
	$message .= "<tr><td><strong>Name:</strong> </td><td>" . strip_tags($post->name) . "</td></tr>";
	$message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($post->email) . "</td></tr>";
	$message .= "<tr><td><strong>Phone Number:</strong> </td><td>" . strip_tags($post->phone) . "</td></tr>";
	$message .= "<tr><td><strong>Address:</strong> </td><td>" . strip_tags($post->address) . "</td></tr>";
	$message .= "<tr><td><strong>Service type:</strong> </td><td>" . strip_tags($post->service_type) . "</td></tr>";
	$message .= "<tr><td><strong>Notes:</strong> </td><td>" . strip_tags($post->note) . "</td></tr>";
	$message .= "</table>";
	$message .= '</body></html>';
	$message .= "<br />";
	$message .= "<div style=\"text-align:center; background-color:#abc; margin:0; border:1px solid #456; border-radius:3px; padding:20px;\">Service Request</div>";
	
	$mail = mail($to, $subject, $message, $headers);

    $data   = array();

    if($mail == TRUE) {
        $data['success'] = TRUE;
    } else {
	    $data['success'] = FALSE;        
    }

    echo json_encode($data);
?>