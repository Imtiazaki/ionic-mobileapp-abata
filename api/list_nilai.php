<?php 
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST');
	header("Access-Control-Allow-Header: X-Requested-With, Content-Type");
	header('Access-Control-Allow-Credentials: true');

	include "conn.inc.php";
	$query = "SELECT * FROM nilai";
	$result = $conn->query($query);

	$out = "";
	while($rec = $result->fetch_array(MYSQLI_ASSOC)){
		if($out != ""){$out .= ",";}

		$out .= '{"nim":"'.$rec["nim"] .'",';
		$out .= '"kdmtk": "'. $rec["kdmtk"] .'",';
		$out .= '"absen": "'. $rec["absen"] .'",';
		$out .= '"uts": "'. $rec["uts"] .'",';
		$out .= '"uas": "'. $rec["uas"] .'"}';
	}

	$out = (!empty($out)) ? '{"records":['.$out.']}' : '';
	echo ($out);

	$conn->close();

?>