<?php
// Repository Usuarios (abstracto)
abstract class repoUsuarios {

}
// Repository UsuariosMySQL (concreta)
class repoUsuariosMySQL extends repoUsuarios {

}
// Repository UsuariosJSON (concreta)
class repoUsuariosJSON extends repoUsuarios {

	function guardarUsuario($mi_usuario) {
		$usuarioJSON = json_encode($mi_usuario);

		file_put_contents("usuarios.json", $usuarioJSON . PHP_EOL, FILE_APPEND);
	}
	
	function traerNuevoId(){
		if (!file_exists("usuarios.json")){
			return 1;
		}

		$usuarios = file_get_contents("usuarios.json");

		$usuariosArray = explode(PHP_EOL, $usuarios);
		$ultimoUsuario = $usuariosArray[count($usuariosArray) - 2 ];
		$ultimoUsuarioArray = json_decode($ultimoUsuario, true);

		return $ultimoUsuarioArray["id"] + 1;
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

}
// Repository UsuariosTXT (concreta)
class repoUsuariosTXT extends repoUsuarios {

}



?>