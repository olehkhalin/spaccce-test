$user = 'olegkhalin18@gmail.com';
$password = '001132Khalin';
// $first_name = 'Vasiliy';
$email = 'test@mail.com';	// email контакта
// $sms = '380991236543';	// номер телефона
$subscribe_contact_url = 'https://esputnik.com/api/v1/contact/subscribe';

$json_contact_value = new stdClass();
$contact = new stdClass();
// $contact->firstName = $first_name;
$contact->channels = array(
		array('type'=>'email', 'value' => $email),
// 		array('type'=>'sms', 'value' => $sms)
		);
// $contact->address = array('region'=> 'Kyivska obl.',
// 		'town'=> 'Kyiv',
// 		'address' => '25, Main str.',
// 		'postcode' => 78900
		);
// $contact->fields = array(array('id'=>100500, 'value' => 'Some value'));	// дополнительные поля контакта
$json_contact_value->contact = $contact;
$json_contact_value->groups = array('Subscribers');	// группы, в которые будет помещен контакт
send_request($subscribe_contact_url, $json_contact_value, $user, $password);

function send_request($url, $json_value, $user, $password) {
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($json_value));
	curl_setopt($ch, CURLOPT_HEADER, 1);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Accept: application/json', 'Content-Type: application/json'));
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch,CURLOPT_USERPWD, $user.':'.$password);
	curl_setopt($ch,CURLOPT_RETURNTRANSFER, 1);
	curl_setopt ($ch, CURLOPT_SSLVERSION, 6);
	$output = curl_exec($ch);
	echo($output);
	curl_close($ch);
}