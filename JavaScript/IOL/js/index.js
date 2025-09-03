async function devSalt(){
    const salt = [
        navigator.userAgent,
        navigator.platform,
        navigator.language,
        screen.width,
        screen.height,
        screen.colorDepth,
        new Date().getTimezoneOffset(),
        navigator.hardwareConcurrency,
        navigator.deviceMemory || 'unknown'
    ].join('|');
    return Array.from(
    new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(salt)))
  ).map(x => x.toString(16).padStart(2, '0')).join('');
}

async function reAUTH(params) {
    getCredentials().then(credencials => {
        fetch("https://api.invertironline.com/token", {
            method: "POST",
            body: `grant_type=password&username=${credencials.user}&password=${credencials.password}`,
            redirect: "follow",
        }).then(response => response.json())
        .then(res => {
            if(res.access_token) {
                cookieStore.set("auth-token", res.access_token, {expires: new Date(Date.now() + res.expires_in * 1000)});
            }else{
                return new Error("Error en la autenticación", {res});
            }
}

async function getCredentials() {
    if((cookieStore.get("login-info"))) {
        const credencials = JSON.parse((await cookieStore.get("login-info")).value);
    } else {
        const credencials = await askCredentials();
    }
    return credencials;
}

async function askCredentials() {
    document.getElementById("loginDialog").showModal();
    return new Promise((resolve, reject) => {
        // si el formulario se envía
        document.getElementById("loginForm").onsubmit = (e) => {
            e.preventDefault();
            const user = document.getElementById("inputUsername").value;
            const password = document.getElementById("inputPassword").value;
            document.getElementById("loginDialog").close();
            cookieStore.set("login-info", JSON.stringify({ user, password }));
            resolve({ user, password });
        };

        // si el diálogo se cierra sin enviar el formulario
        document.getElementById("loginDialog").onclose = () => {
            reject(new Error("Login dialog closed"));
        };
    }); 
}
    