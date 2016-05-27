<?php

class Usuario
{
	private $field_id;
	private $field_name;
	private $field_description;
	private $field_default_label;

	public function__construct($field_id, $field_name, $field_description){
		$this->setField_field_id($field_id);
		$this->setField_name($field_name);
		$this->setField_description($field_description);
		$this->setField_label($field_default_label)
	}

	//============== SET & GET ======================
	// Set&Get $field_id
	public function setField_field_id($field_id){
		$this->$field_id = $field_id;
	}
	public function getField_field_id($field_id){
		$field_id = $this->$field_id;
	}
	// Set&Get $field_name
	public function setField_name($field_name){
		$this->$field_name = $field_name;
	}
	public function getField_name($field_name){
		$field_name = $this->$field_name;
	}
	// Set&Get $field_description
	public function setField_description($field_description){
		$this->$field_description = $field_description;
	}
	public function getField_description($field_description){
		$field_description = $this->$field_description;
	}
		// Set&Get $field_label
	public function setField_label($field_label){
		$this->$field_default_label = $field_description;
	}
	public function getField_label($field_label){
		$field_default_label = $this->$field_default_label;
	}
}


<?