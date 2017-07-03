<?php
$errors = array(); // array to hold validation errors
$data   = array(); // array to pass back data

// validate the variables ======================================================
// if any of these variables don't exist, add an error to our $errors array

echo json_encode($_POST);

if (empty($_POST['name']))
	$errors['name'] = 'Name is required.';
// if (empty($_POST['address']))
// 	$errors['address'] = 'Address is required.';
if (empty($_POST['email']))
	$errors['email'] = 'Email is required.';
// if (empty($_POST['phone']))
// 	$errors['phone'] = 'Phonenumber is required.';
if (empty($_POST['service_type']))
	$errors['service_type'] = 'Service type is required.';
if (empty($_POST['note']))
	$errors['note'] = 'Notes are required.';

// return a response ===========================================================

// if there are any errors in our errors array, return a success boolean of false
if (!empty($errors)) {
	
	// if there are items in our errors array, return those errors
	$data['success'] = false;
	$data['errors']  = $errors;
} else {
	
	// if there are no errors process our form, then return a message
	
	// DO ALL YOUR FORM PROCESSING HERE
	// THIS CAN BE WHATEVER YOU WANT TO DO (LOGIN, SAVE, UPDATE, WHATEVER)
	
	// show a message of success and provide a true success variable
	$data['success']     = true;
	$data['message']     = 'Success!';
	$data['email']       = strip_tags($_POST['email']);
}

	// return all our data to an AJAX call
	echo json_encode($data);
	
	$to      = 'service@rosevillepoolservice.com';

	$subject = 'Service Request Message';
	
	$headers = 'From: ' . $_POST['email'] . "\r\n";
	$headers .= 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	
	$message = '<html><body>';
	$message .= '<h1>Service Request Message</h1>';
	$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
	// $message .= "<tr style=\"text-align:center;height:80px;background-color:#abc;margin:0;border:1px solid #456;border-radius:3px;padding:10px;\"><td><strong>Name:</strong> </td><td>" . strip_tags($_POST['name']) . "</td></tr>";
	$message .= "<tr><td><strong>Name:</strong> </td><td>" . strip_tags($_POST['name']) . "</td></tr>";
	$message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($_POST['email']) . "</td></tr>";
	$message .= "<tr><td><strong>Phone Number:</strong> </td><td>" . strip_tags($_POST['phone']) . "</td></tr>";
	$message .= "<tr><td><strong>Address:</strong> </td><td>" . strip_tags($_POST['address']) . "</td></tr>";
	$message .= "<tr><td><strong>Service type:</strong> </td><td>" . strip_tags($_POST['service_type']) . "</td></tr>";
	$message .= "<tr><td><strong>Notes:</strong> </td><td>" . strip_tags($_POST['note']) . "</td></tr>";
	$message .= "</table>";
	$message .= '</body></html>';
	$message .= "<br />";
	$message .= "<div style=\"text-align:center; background-color:#abc; margin:0; border:1px solid #456; border-radius:3px; padding:20px;\">Service Request</div>";
	
	$mail = mail($to, $subject, $message, $headers);

?>