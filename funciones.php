<?php
	function validarUsuario($miUsuario)
	{
		$errores = [];

		if (trim($miUsuario["nombre"]) == "")
		{
			$errores[] = "Falta el nombre";
		}
		if (trim($miUsuario["apellido"]) == "")
		{
			$errores[] = "Falta el apellido";
		}
		if (trim($miUsuario["pass"]) == "")
		{
			$errores[] = "Falta la pass";
		}
		if (trim($miUsuario["cpass"]) == "")
		{
			$errores[] = "Falta el cpass";
		}
		if ($miUsuario["pass"] != $miUsuario["cpass"])
		{
			$errores[] = "Pass y Cpass son distintas";
		}
		if ($miUsuario["mail"] == "")
		{
			$errores[] = "Falta el mail";
		}
		if (!filter_var($miUsuario["mail"], FILTER_VALIDATE_EMAIL))
		{
			$errores[] = "El mail tiene forma fea";
		}
		if (existeElMail($miUsuario["mail"]))
		{
			$errores[] = "Usuario ya registrado";
		}
		if ($miUsuario["kmli2"] == "")
		{
			$errores[] = "Debe aceptar terminos y condiciones";
		}
		return $errores;
	}

	function existeElMail($mail)
	{
		$usuarios = file_get_contents("usuarios.json");

		$usuariosArray = explode(PHP_EOL, $usuarios);

		array_pop($usuariosArray);

		foreach ($usuariosArray as $key => $usuario) {
			$usuarioArray = json_decode($usuario, true);

			if ($mail == $usuarioArray["mail"])
			{
				return true;
			}
		}

		return false;
	}

	function guardarUsuario($miUsuario) 
	{
		$usuarioJSON = json_encode($miUsuario);

		file_put_contents("usuarios.json", $usuarioJSON . PHP_EOL, FILE_APPEND);
	}

	function crearUsuario($miUsuario)
	{
		$usuario = [
			"nombre" => $miUsuario["nombre"],
			"apellido" => $miUsuario["apellido"],
			"mail" => $miUsuario["mail"],
			"password" => password_hash($miUsuario["pass"], PASSWORD_DEFAULT),
			"id" => traerNuevoId()
		];

		return $usuario;
	}

	function traerNuevoId()
	{
		if (!file_exists("usuarios.json"))
		{
			return 1;
		}

		$usuarios = file_get_contents("usuarios.json");

		$usuariosArray = explode(PHP_EOL, $usuarios);
		$ultimoUsuario = $usuariosArray[count($usuariosArray) - 2 ];
		$ultimoUsuarioArray = json_decode($ultimoUsuario, true);

		return $ultimoUsuarioArray["id"] + 1;
	}



	function guardarImagen($miUsuario)
	{
		if ($_FILES["imagen"]["error"] == UPLOAD_ERR_OK)
		{
			// No hubo errores :)
			$path = $_FILES['imagen']['name'];
			$ext = pathinfo($path, PATHINFO_EXTENSION);

			$miArchivo = dirname(__FILE__);
			$miArchivo = $miArchivo . "/avatar/";
			$miArchivo = $miArchivo . $miUsuario["id"] . "." . $ext;

			move_uploaded_file($_FILES["imagen"]["tmp_name"], $miArchivo);
		}
	}
?>