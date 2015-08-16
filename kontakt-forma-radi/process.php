<?php

$errors = "";
$data = array();

// validate the variables
if (empty($_POST['ime']))
	$errors .= 'Ime is required. ';

if (empty($_POST['nadimak']))
	$errors .= 'Nadimak is required. ';

// return a response
if ($errors != '') {
	$data['uspeh'] = false;
	$data['errors']  = $errors;
} else {
	$data['uspeh'] = true;
	$data['obavestenje'] = 'Podaci su uspešno poslati!';
}

echo json_encode($data);
