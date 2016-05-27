<!DOCTYPE html>
<html lang="es" class="no-js">
    <head>
     <!-- Site Title -->
        <title> Login | Ununso</title>

        <!-- head basicos -->
        <?php required_once 'u_cabecera.php';?>
        <!-- Fin de head basicos -->
            
    </head>
    
    <body id="top">
        
        <!-- Cabecera -->
        <?php required_once 'u_menu5.php';?>
        <!-- Fin de cabecera -->
        
        <section class="section-full">
            <div class="container">
                <div class="row">
                    <div class="col-md-offset-2 col-md-8">
                        <div class="login-wrap style2">
                            <h3 class="fw300 mb30">Ingresar a su cuenta</h3>
                            
                            <form   action="u_login_validate.php" 
                                    class="" method="POST">
                                <div class="form-field-item field-with-icon icon-left">
                                    <label for="">Usuario o Email</label>
                                    <div class="relative">
                                        <input type="email" placeholder="Email" name="email" required class="form-field">
                                        <i class="fa fa-envelope-o"></i>
                                    </div>
                                </div>
                                <div class="form-field-item field-with-icon icon-left mt20 mb30">
                                    <label for="">Contraseña</label>
                                    <div class="relative">
                                        <input type="password" placeholder="Password" required name="pass" class="form-field">
                                        <i class="fa fa-lock"></i>
                                    </div>
                                </div>

                                <div class="form-field-item mt20 mb20 left">
                                    <input type="checkbox" class="custom-check custom-check-two" id="kmli2" name="kmli2">
                                    <label for="kmli2">Continuar logueado</label>
                                </div>

                                <div class="form-field-item right">
                                    <button class="btn no-border btn-mid btn-theme-color btn-3d" type="submit">Login</button>
                                </div>
                                <div class="clear"></div>
                            </form>
                            <p class="mt20">¿No tiene cuenta? <a href="u_register.php">Registrarse</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end accordion style two -->

        <!-- Pie -->
        <?php required_once 'u_pie.php';?>
        <!-- END Pie -->




    </body>
</html>
