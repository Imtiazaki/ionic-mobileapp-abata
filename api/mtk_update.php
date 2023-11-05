<?php 
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST');
	header("Access-Control-Allow-Header: X-Requested-With, Content-Type");
	header('Access-Control-Allow-Credentials: true');

	include "conn.inc.php";
	$query = "SELECT * FROM mtk WHERE kdmtk = '".$_GET['kdmtk']."'";
	$result = $conn -> query($query);

	$out ="";

	if($rs = $result->fetch_array()){
		if($out != ""){ $out .= ","; }
			$out .= '{"kdmtk":"'.$rs["kdmtk"] .'",';
			$out .= '"namamtk": "'. $rs["namamtk"] .'",';
			$out .= '"sks": "'. $rs["sks"] .'"}';
			$out = (!empty($out)) ? '{"records" : '.$out.'}' : '';
			echo($out);
	}else{
		return false;
	}

	$conn->close();
?>