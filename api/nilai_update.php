<?php 
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST');
	header("Access-Control-Allow-Header: X-Requested-With, Content-Type");
	header('Access-Control-Allow-Credentials: true');

	include "conn.inc.php";
	$query = "SELECT * FROM nilai WHERE nim = '".$_GET['nim']."'";
	$result = $conn -> query($query);

	$out ="";

	if($rs = $result->fetch_array()){
		if($out != ""){ $out .= ","; }
			$out .= '{"nim":"'.$rs["nim"] .'",';
			$out .= '"kdmtk": "'. $rs["kdmtk"] .'",';
			$out .= '"absen": "'. $rs["absen"] .'",';
			$out .= '"uts": "'. $rs["uts"] .'",';
			$out .= '"uas": "'. $rs["uas"] .'"}';
			$out = (!empty($out)) ? '{"records" : '.$out.'}' : '';
			echo($out);
	}else{
		return false;
	}

	$conn->close();
?>