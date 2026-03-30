// 🔐 LOGIN CHECK (ADD THIS AT TOP)
const supplier = localStorage.getItem("supplier");

if (!supplier) {
    window.location.href = "login.html";
}


// existing function
function goBack() {
    window.location.href = "/index.html";
}

// 🔓 LOGOUT FUNCTION (ADD HERE)
function logout() {
    localStorage.removeItem("supplier");
    window.location.href = "login.html";
}