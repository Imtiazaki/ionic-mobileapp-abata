<?php 
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST');
	header("Access-Control-Allow-Header: X-Requested-With, Content-Type");
	header('Access-Control-Allow-Credentials: true');

	include "conn.inc.php";
	$query = "SELECT * FROM mhs WHERE nim = '".$_GET['nim']."'";
	$result = $conn -> query($query);

	$out ="";

	if($rs = $result->fetch_array()){
		if($out != ""){ $out .= ","; }
			$out .= '{"nim":"'.$rs["nim"] .'",';
			$out .= '"nama": "'. $rs["nama"] .'",';
			$out .= '"alamat": "'. $rs["alamat"] .'",';
			$out .= '"jenkel": "'. $rs["jenkel"] .'"}';
			$out = (!empty($out)) ? '{"records" : '.$out.'}' : '';
			echo($out);
	}else{
		return false;
	}

	$conn->close();
?>