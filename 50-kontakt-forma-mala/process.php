<?php

$greska = "";
$data = array();

// validate the variables
if (empty($_POST['ime']))
	$greska .= 'Ime is required. ';

if (empty($_POST['nadimak']))
	$greska .= 'Nadimak is required. ';

// return a response
if ($greska != '') {
	$data['uspeh'] = false;
	$data['greska']  = $greska;
} else {
	$data['uspeh'] = true;
	$data['obavestenje'] = 'Podaci su uspešno poslati!';
}

echo json_encode($data);
