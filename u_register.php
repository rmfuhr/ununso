<!DOCTYPE html>
<?php

    require_once("u_clase_usuario.php");
    require_once("u_repo_usuario.php");

    $pNombre = "";
    $pApellido = "";
    $pMail = "";
    

    if ($_POST)
    {
        $pNombre    = $_POST["nombre"];
        $pApellido  = $_POST["apellido"];
        $pMail      = $_POST["mail"];
        
        //Acá vengo si me enviaron el form

        //Validar
        $errores = validarUsuario($_POST);

        // Si no hay errores....
        if (empty($errores))
        {
            $usuario = new usuario;
            $usuario = crearUsuario($_POST);
            // Guardar al usuario en un JSON
            guardarUsuario($usuario);

            $pNombre = "";
            $pApellido = "";
            $pMail = "";

            // guardarImagen($usuario);
           
        }
    }
?>

<html lang="en" class="no-js"> 
    <head>
        <!-- Site Title -->
        <title>Registro | ununso</title>
        
        <!-- head basicos -->
        <?php include 'u_cabecera.php';?>
        <!-- Fin de head basicos -->
            
    </head>
	
    <body id="top">
        <!-- Cabecera -->
        <?php include 'u_menu5.php';?>
        <!-- Fin de cabecera -->
        

        <section class="section-full">
            <div class="container">
                <div class="row">
                    <div class="col-md-offset-2 col-md-8">
                        <div class="login-wrap style2">
                            <h3 class="fw300 mb30">Registro</h3>
                            <form action="u_register.php" method="POST" enctype="multipart/form-data">

                            
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-field-item">
                                            <label for="">Nombre</label>
                                            <div class="relative">
                                                <input id="nombre" name="nombre" type="text" class="form-field" value="<?php echo $pNombre ?>">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-field-item">
                                            <label for="">Apellido</label>
                                            <div class="relative">
                                                <input id="apellido" name="apellido" type="text" class="form-field" value="<?php echo $pApellido ?>">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-field-item">
                                            <label for="">Email</label>
                                            <div class="relative">
                                                <input id="mail" name="mail" type="email" class="form-field" value="<?php echo $pMail ?>">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="form-field-item mt20 mb30">
                                            <label for="">Contraseña</label>
                                            <div class="relative">
                                                <input id="pass" name="pass" type="password" placeholder="Contraseña"  class="form-field">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="form-field-item mt20 mb30">
                                            <label for="">Confirmación de Contraseña</label>
                                            <div class="relative">
                                                <input id="cpass" name="cpass" type="password" placeholder="Contraseña" class="form-field">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-field-item mt20 mb20 left">
                                        <input type="checkbox" class="custom-check custom-check-two" id="kmli2" name="kmli2">
                                        <label for="kmli2">Estoy de acuerdo con los <a href="#">Terminos de Servicio</a> y <a href="#">Politicas de Privacidad</a></label>
                                    </div>

                                    <div class="form-field-item right">
                                        <button class="btn no-border btn-mid btn-theme-color btn-3d" type="submit">Registrarse</button>
                                    </div>
                                </div>
                            </form>
                            <p class="mt20">¿Ya tiene una cuenta? <a href="./u_login.php">Login</a></p>
                            <?php if (!empty($errores)) { ?>
                                <div style="width:300px">
                                    <ul>
                                        <?php foreach ($errores as $error) { ?>
                                            <li>
                                                <?php echo $error ?>
                                            </li>
                                        <?php } ?>
                                    </ul>
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end accordion style two -->


        <!-- Pie -->
        <?php include 'u_pie.php';?>
        <!-- END Pie -->



    </body>
</html>
