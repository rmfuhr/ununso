<?php
	function validarUsuario($mi_usuario)
	{
		$errores = [];

		if (trim($mi_usuario["nombre"]) == "")
		{
			$errores[] = "Falta el nombre";
		}
		if (trim($mi_usuario["apellido"]) == "")
		{
			$errores[] = "Falta el apellido";
		}
		if (trim($mi_usuario["pass"]) == "")
		{
			$errores[] = "Falta la password";
		}
		if (trim($mi_usuario["cpass"]) == "")
		{
			$errores[] = "Falta el cpass";
		}
		if ($mi_usuario["pass"] != $mi_usuario["cpass"])
		{
			$errores[] = "Password y confirmacion de password son distintas";
		}
		if ($mi_usuario["mail"] == "")
		{
			$errores[] = "Falta el mail";
		}
		if (!filter_var($mi_usuario["mail"], FILTER_EMAIL))
		{
			$errores[] = "El mail tiene forma fea";
		}
		if (existeElMail($mi_usuario["mail"]))
		{
			$errores[] = "Usuario ya registrado";
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

	function guardarUsuario($mi_usuario) 
	{
		$usuarioJSON = json_encode($mi_usuario);

		file_put_contents("usuarios.json", $usuarioJSON . PHP_EOL, FILE_APPEND);
	}

	function crearUsuario($mi_usuario)
	{
		$usuario = [
			"nombre" => $mi_usuario["nombre"],
			"apellido" => $mi_usuario["apellido"],
			"mail" => $mi_usuario["mail"],
			"password" => password_hash($mi_usuario["pass"], PASSWORD_DEFAULT),
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


	function guardarImagen($mi_usuario)
	{
		if ($_FILES["imagen"]["error"] == UPLOAD_ERR_OK)
		{
			// No hubo errores :)
			$path = $_FILES['imagen']['name'];
			$ext = pathinfo($path, PATHINFO_EXTENSION);

			$miArchivo = dirname(__FILE__);
			$miArchivo = $miArchivo . "/avatar/";
			$miArchivo = $miArchivo . $mi_usuario["id"] . "." . $ext;

			move_uploaded_file($_FILES["imagen"]["tmp_name"], $miArchivo);
		}
	}
?>