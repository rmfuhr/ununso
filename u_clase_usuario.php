<?php
class usuario {
	var $pUserID;
	var $pNombre;
    var $pApellido;
    var $pMail;
    var $pPassword;

	public function__construct($pUserID, $pNombre, $pApellido, $pMail){
		$this->setUser_id($pUserID);
		$this->setNombre($pNombre);
		$this->setApellido($pApellido);
		$this->setEmail($pMail)
	}

	function crearUsuario($mi_usuario){
		$usuario = [
			$pNombre => $mi_usuario["nombre"],
			$pApellido => $mi_usuario["apellido"],
			$pMail => $mi_usuario["mail"],
			$pPassword => password_hash($mi_usuario["pass"], PASSWORD_DEFAULT),
			$pUserID => traerNuevoId()
		];

		return $usuario;
	}
	//============== SET & GET ======================
	// Set&Get $pUserID
	public function setUser_id($pUserID){
		$this->$pUserID = $pUserID;
	}
	public function getUser_id($pUserID){
		$pUserID = $this->$pUserID;
	}
	// Set&Get $pNombre
	public function setNombre($pNombre){
		$this->$pNombre = $pNombre;
	}
	public function getNombre($pNombre){
		$pNombre = $this->$pNombre;
	}
	// Set&Get $pApellido
	public function setApellido($pApellido){
		$this->$pApellido = $pApellido;
	}
	public function getApellido($pApellido){
		$pApellido = $this->$pApellido;
	}
		// Set&Get $pMail
	public function seteMail($pMail){
		$this->$pMail = $pApellido;
	}
	public function geteMail($pMail){
		$pMail = $this->$pMail;
	}



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


	function guardarImagen($mi_usuario){
		if ($_FILES["imagen"]["error"] == UPLOAD_ERR_OK){
			// No hubo errores :)
			$path = $_FILES['imagen']['name'];
			$ext = pathinfo($path, PATHINFO_EXTENSION);

			$miArchivo = dirname(__FILE__);
			$miArchivo = $miArchivo . "/avatar/";
			$miArchivo = $miArchivo . $mi_usuario["id"] . "." . $ext;

			move_uploaded_file($_FILES["imagen"]["tmp_name"], $miArchivo);
		}
	}
}
	


?>