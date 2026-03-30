function makePurchase() {

    const user = JSON.parse(localStorage.getItem("user")); // 🔥 ADD

    fetch(API + "/purchase", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            productId: +purchaseProductId.value,
            quantity: +purchaseQty.value,
            userId: user.id   // 🔥 ADD THIS
        })
    })
    .then(async res => {
        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.error || "Purchase failed");
        }
        return res.json();
    })
    .then(() => {
        alert("Purchase Done");
        loadStock();
    })
    .catch(err => {
        alert(err.message);
    });
}

loadStock();