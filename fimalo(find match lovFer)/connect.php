<?php

$fname = $_POST['fname']
$sname = $_POST['sname']
$sex = $_POST['sex']
$identification = $_POST['identification']
$email = $_POST['email']
$termsandconditions = $_POST['termsandconditions']

	// Database connection
	$conn = new mysqli('localhost','root','','log');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into signup(fname, sname, sex, identification,email, termsandconditions) values(?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("ssssss", $fname, $sname, $sex, $identification, $identification, $email);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>