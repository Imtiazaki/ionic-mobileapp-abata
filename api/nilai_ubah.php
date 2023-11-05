<?php 
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST');
	header("Access-Control-Allow-Header: X-Requested-With, Content-Type");
	header('Access-Control-Allow-Credentials: true');

	include "conn.inc.php";
	$query = "UPDATE nilai set absen = '".$_GET['absen']."',
							   uts = '".$_GET['uts']."',
							   uas = '".$_GET['uas']."'
					       where nim = '".$_GET['nim']."' AND kdmtk = '".$_GET['kdmtk']."'";


	$result = mysqli_query($conn, $query);
	if($result){
		echo true;
	}else{
		echo true;
	}
	$conn->close();

?>