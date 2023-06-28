export function generarContrasena() {
    // Definir los caracteres permitidos para cada nivel de seguridad
    const caracteresSeguros =  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  
  
    // Generar la contraseña
    let contrasena = '';
    const longitud = 12; // Longitud predeterminada de la contraseña
  
    for (let i = 0; i < longitud; i++) {
      const randomIndex = Math.floor(Math.random() * caracteresSeguros.length );
      contrasena += caracteresSeguros.charAt( randomIndex );
    }
  
    return contrasena;
}
  
  