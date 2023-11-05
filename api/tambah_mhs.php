<?php 
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST');
	header("Access-Control-Allow-Header: X-Requested-With, Content-Type");
	header('Access-Control-Allow-Credentials: true');

	if(isset($_GET['nim']) && isset($_GET['nama']) && isset($_GET['alamat']) && isset($_GET['jenkel'])){
		if(!empty($_GET['nim']) && !empty($_GET['nama']) && !empty($_GET['alamat']) && !empty($_GET['jenkel'])){
			include "conn.inc.php";

			$nim = $_GET['nim'];
			$nama = $_GET['nama'];
			$alamat = $_GET['alamat'];
			$jenkel = $_GET['jenkel'];

			$query = "INSERT INTO mhs (nim, nama, alamat, jenkel) value('$nim','$nama','$alamat','$jenkel')";
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