<?php 
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST');
	header("Access-Control-Allow-Header: X-Requested-With, Content-Type");
	header('Access-Control-Allow-Credentials: true');

	if(isset($_GET['kdmtk']) && isset($_GET['namamtk']) && isset($_GET['sks'])){
		if(!empty($_GET['kdmtk']) && !empty($_GET['namamtk']) && !empty($_GET['sks'])){
			include "conn.inc.php";

			$kdmtk = $_GET['kdmtk'];
			$namamtk = $_GET['namamtk'];
			$sks = $_GET['sks'];


			$query = "INSERT INTO mtk (kdmtk, namamtk, sks) value('$kdmtk','$namamtk','$sks')";
			$result = mysqli_query($conn, $query);

			if($result){
				echo TRUE;
			}else{
				echo FALSE;
			}
			$conn->close();
		}
	}
?>