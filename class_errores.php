<?php

class Errores
{
	private $error_id;
	private $error_code;
	private $error_description;

	public function__construct($error_id, $error_description){
		$this->setError_error_id($error_id);
		$this->setError_code($error_code);
		$this->setError_description($error_description);
		
	}
	//============== SET & GET ======================
	// Set&Get $error_id
	public function setError_error_id($error_id){
		$this->$error_id = $error_id;
	}
	public function getError_error_id($error_id){
		$error_id = $this->$error_id;
	}
	// Set&Get $error_description
	public function setError_code($error_code){
		$this->$error_code = $error_code;
	}
	public function getError_code($error_code){
		$error_code = $this->$error_code;
	}
		// Set&Get $error_default_label
	public function setError_description($error_description){
		$this->$error_default_label = $error_description;
	}
	public function getError_description($error_description){
		$error_description = $this->$error_description;
	}
}


<?