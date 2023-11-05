<?php 
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST');
	header("Access-Control-Allow-Header: X-Requested-With, Content-Type");
	header('Access-Control-Allow-Credentials: true');

	include  "conn.inc.php";
	$query = "UPDATE mtk set namamtk = '".$_GET['namamtk']."',
							 sks = '".$_GET['sks']."'	 
						 where kdmtk = '".$_GET['kdmtk']."'";

	$result = mysqli_query($conn, $query);
	if($result){
		echo true;
	}else{
		echo true;
	}
	$conn->close();

?>