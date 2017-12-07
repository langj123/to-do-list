<?php
include_once('inc/db.php');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head lang="en" xml:lang="en">
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title>To Do List Creator</title>
<link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
    <div class="wrapper">
        <header class="main-head">
            <h1>To Do Lists <button class="button add" id="To-Do-Generator">Add a To Do List</button></h1>
        </header><!-- .main-head -->
        <section class="to-dos">
        	<div class="current-dos">
        	</div>
        	<div class="to-do-sidebar">
        	</div>
        </section><!-- .to-dos -->
    </div><!-- .wrapper -->
</body>
<script type="text/javascript" src="js/list-gen.js"></script>
</html>