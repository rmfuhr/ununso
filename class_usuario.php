<?php

class User
{
	private $user_id;
	private $nombre;
	private $apellido;
	private $eMail;

	public function__construct($user_id, $nombre, $apellido, $eMail){
		$this->setUser_id($user_id);
		$this->setNombre($nombre);
		$this->setApellido($apellido);
		$this->setEmail($eMail)
	}
	//============== SET & GET ======================
	// Set&Get $user_id
	public function setUser_id($user_id){
		$this->$user_id = $user_id;
	}
	public function getUser_id($user_id){
		$user_id = $this->$user_id;
	}
	// Set&Get $nombre
	public function setNombre($nombre){
		$this->$nombre = $nombre;
	}
	public function getNombre($nombre){
		$nombre = $this->$nombre;
	}
	// Set&Get $apellido
	public function setApellido($apellido){
		$this->$apellido = $apellido;
	}
	public function getApellido($apellido){
		$apellido = $this->$apellido;
	}
		// Set&Get $eMail
	public function seteMail($eMail){
		$this->$eMail = $apellido;
	}
	public function geteMail($eMail){
		$eMail = $this->$eMail;
	}
}


<?
