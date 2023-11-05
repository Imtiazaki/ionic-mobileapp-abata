<?php 
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST');
	header("Access-Control-Allow-Header: X-Requested-With, Content-Type");
	header('Access-Control-Allow-Credentials: true');

	if(isset($_GET['nim']) && isset($_GET['kdmtk']) && isset($_GET['absen']) && isset($_GET['uts']) && isset($_GET['uas'])){
		if(!empty($_GET['nim']) && !empty($_GET['kdmtk']) && !empty($_GET['absen']) && !empty($_GET['uts']) && !empty($_GET['uas'])){
			include "conn.inc.php";

			$nim = $_GET['nim'];
			$kdmtk = $_GET['kdmtk'];
			$absen = $_GET['absen'];
			$uts = $_GET['uts'];
			$uas = $_GET['uas'];

			$query = "INSERT INTO nilai (nim, kdmtk, absen, uts, uas) value('$nim','$kdmtk','$absen','$uts', '$uas')";
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