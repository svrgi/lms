function redirectToUPI(app) {
    const amount = document.getElementById("amount").value;

    if (!amount || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    const upiID = "8904713074@sbi";
    const name = "SVR Techschool";
    const currency = "INR";

    // Create UPI link
    const upiLink = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(name)}&am=${amount}&cu=${currency}`;

    // Open corresponding UPI app
    if (app === "gpay") {
        window.location.href = upiLink;
    } else if (app === "phonepe") {
        window.location.href = upiLink;
    } else {
        alert("Unsupported payment method.");
    }
}
