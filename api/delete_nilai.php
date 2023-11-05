<?php 
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST');
	header("Access-Control-Allow-Header: X-Requested-With, Content-Type");
	header('Access-Control-Allow-Credentials: true');

	include "conn.inc.php";
	$query = "DELETE FROM nilai WHERE nim = '".$_GET['id']."'";

	$result = mysqli_query($conn, $query);
	if($result){
		echo TRUE;
	}else{
		echo FALSE;
	}
	$conn->close();
?>