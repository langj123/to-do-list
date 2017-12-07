<?php
	$db = new mysqli('localhost', 'root', 'root', 'testingdb');
	if ($db->connect_error) {
		die('Connect Error (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
	} else {
		$db->close();
	}
?>