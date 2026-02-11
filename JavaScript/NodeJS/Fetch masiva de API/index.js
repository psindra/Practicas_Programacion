import usuarios from "./usuarios.json" assert { type: "json" }
import "dotenv/config"

const _HOST = process.env.HOST_TEST;
const _AUTH = process.env.AUTH_TEST;

console.log({_HOST, _AUTH});

process.exit()


// Función para hacer la petición PATCH a la API
async function updateUserRole(username, newUserType) {
    const url = `https://telefonica-ar.test.fs.ocs.oraclecloud.com/rest/ofscCore/v1/users/${username}`;
    
    const headers = {
        "Sec-Fetch-Mode": "cross-site",
        "Content-Type": "application/json",
        "Authorization": "Basic YXBwX3NvcG9ydGVfaW5kcmFAdGVsZWZvbmljYS1hci50ZXN0OjE0Njk2MzY4M2JlOGI1YmQ4Zjc0M2FhNGY4YWE1ZjJiYjYwNDY2ZDgzZWFiYTUzYTgzOWE2MGM2NTIxYg==" // Reemplaza con el token correcto
    };
    
    const body = JSON.stringify({ "userType": newUserType });

    try {
        const response = await fetch(url, {
            method: 'PATCH',
            headers: headers,
            body: body
        });

        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.status}`);
        }

        const result = await response.json();
        
        if(result.userType != newUserType){
            throw new Error(`Nuevo Rol no impacto o hubo otro error -> ${result.userType} != ${newUserType}`);
        }
        console.log(`Usuario ${username} actualizado correctamente:`, {"name" : result.name}, {"login": result.login}, {"userType": result.userType});
    } catch (error) {
        console.error(`Error al actualizar el usuario ${username}:`, error);
    }
}



try {
    // Iterar sobre los usuarios importados del JSON
    for (const usuario of usuarios) {
        const user = usuario.user;
        const rol = usuario.rol;

        await updateUserRole(user, rol); // Ejecuta la actualización de roles
    }
} catch (error) {
    console.error(`Error al procesar usuarios: ${error}`);
}