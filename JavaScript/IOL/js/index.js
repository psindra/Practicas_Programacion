// async function devSalt(){
//     const salt = [
//         navigator.userAgent,
//         navigator.platform,
//         navigator.language,
//         screen.width,
//         screen.height,
//         screen.colorDepth,
//         new Date().getTimezoneOffset(),
//         navigator.hardwareConcurrency,
//         navigator.deviceMemory || 'unknown'
//     ].join('|');
//     return Array.from(
//     new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(salt)))
//   ).map(x => x.toString(16).padStart(2, '0')).join('');
// }

const apiHost = "https://api.invertironline.com/";
// const tokenURL = "https://api.invertironline.com/token";
const tokenURL = "https://script.google.com/macros/s/AKfycbwG4sMNG2bwy28UurDp_oO9wHSkCFIeWYgzvQk_7kfH7y-a6v7EfxapqfeH7pbHqXErCg/exec";

async function reAUTH() {
    getCredentials()
    .then(async credencials => {
        return fetch(tokenURL, {
            method: "POST",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `username=${credencials.user}&password=${credencials.password}&grant_type=password`,
            mode: "cors",
            redirect: "follow",
        })
    })
    .then(response => response.json())
    .then(res => {
        if (res.access_token) {
            return cookieStore.set({ name: "auth-token", value: res.access_token, expires: new Date(Date.now() + res.expires_in * 1000) });
        } else {
            return new Error("Error en la autenticación", { res });
        }
    })
    .then(() => {
        console.log("Reautenticación exitosa");
        mensajeModal("Reautenticación exitosa", "Se ha reautenticado correctamente.", false);
        return Promise.resolve();
    })
    .catch(err => {
        console.error("Error en la reautenticación:", err);
        mensajeModal("Error en la reautenticación", err);
        return Promise.reject(err);
    });
}

async function getCredentials() {
    if ((await cookieStore.get("login-info"))) {
        return JSON.parse((await cookieStore.get("login-info")).value);
    } else {
        return await askCredentials();
    }
}

async function askCredentials() {
    document.getElementById("loginDialog").showModal();
    return new Promise((resolve, reject) => {
        // si el formulario se envía
        document.getElementById("loginForm").onsubmit = async (e) => {
            e.preventDefault();
            const user = document.getElementById("inputUsername").value;
            const password = document.getElementById("inputPassword").value;
            document.getElementById("loginDialog").onclose = null;
            document.getElementById("loginDialog").close();
            await cookieStore.set("login-info", JSON.stringify({ user, password }));
            resolve({ user, password });
        };

        // si el diálogo se cierra sin enviar el formulario
        document.getElementById("loginDialog").onclose = () => {
            reject(new Error("Login dialog closed"));
        };
    });
}

async function loginFormHandler(resolve, reject) {
    // si el formulario se envía
    document.getElementById("loginForm").onsubmit = async (e) => {
        e.preventDefault();
        const user = document.getElementById("inputUsername").value;
        const password = document.getElementById("inputPassword").value;
        document.getElementById("loginDialog").onclose = null;
        document.getElementById("loginDialog").close();
        await cookieStore.set("login-info", JSON.stringify({ user, password }));
        resolve({ user, password });
    };

    // si el diálogo se cierra sin enviar el formulario
    document.getElementById("loginDialog").onclose = () => {
        reject(new Error("Login dialog closed"));
    };    
}

loginFormHandler(() => {}, () => {});