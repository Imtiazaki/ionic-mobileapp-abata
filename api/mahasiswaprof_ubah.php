<?php 
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST');
	header("Access-Control-Allow-Header: X-Requested-With, Content-Type");
	header('Access-Control-Allow-Credentials: true');

	include "conn.inc.php";

		$query = "UPDATE mhs set pass = '".$_GET['pass']."'
						 where nim = '".$_GET['nim']."' AND nama = '".$_GET['nama']."'";

	$result = mysqli_query($conn, $query);
	if($result){
		echo true;
	}else{
		echo true;
	}
	$conn->close();

?>