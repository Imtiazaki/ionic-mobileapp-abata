<?php 
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST');
	header("Access-Control-Allow-Header: X-Requested-With, Content-Type");
	header('Access-Control-Allow-Credentials: true');

	if(isset($_GET['nim']) && isset($_GET['pass'])){
		if(!empty($_GET['nim']) && !empty($_GET['pass'])){
			include "conn.inc.php";

			$nim = $_GET['nim'];
			$pass = $_GET['pass'];
			$query = "SELECT * FROM mhs WHERE nim = '$nim' AND pass = '$pass'";
			$result = $conn->query($query);

			$out = "";
			if($rs = $result-> fetch_array()){
				if($out != ""){$out .= ",";}
				$out .= '{"nim":"'.$rs["nim"] .'",';
				$out .= '"nama": "'. $rs["nama"] .'",';
				$out .= '"alamat": "'. $rs["alamat"] .'",';
				$out .= '"jenkel": "'. $rs["jenkel"] .'",';
				$out .= '"pass": "'. $rs["pass"] .'"}';
				$out = (!empty($out)) ? '{"records":'.$out.'}' : '';
				echo($out);
			}else{
				return false;
			}
			$conn->close();
		}
	}

?>