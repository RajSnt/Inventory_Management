// 🔐 AUTH CHECK (SAFE - NO LOOP)
function checkAuth() {
    const user = localStorage.getItem("user");

    if (!user) {
        window.location.href = "/login.html";
    }
}

// 🔓 LOGOUT
function logout() {
    localStorage.removeItem("user");
    window.location.href = "/login.html";
}

// 🔙 BACK BUTTON
function goBack() {
    window.location.href = "/index.html";
}