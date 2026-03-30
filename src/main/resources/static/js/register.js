function register() {

    const supplier = {
        name: document.getElementById("name").value,
        contact: document.getElementById("contact").value,
        address: document.getElementById("address").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };

    fetch("http://localhost:8080/suppliers/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(supplier)
    })
    .then(res => {
        if (!res.ok) throw new Error("Username already exists");
        return res.json();
    })
    .then(() => {
        alert("Registered successfully!");
        window.location.href = "login.html";
    })
    .catch(err => alert(err.message));
}