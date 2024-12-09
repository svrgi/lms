function redirectToUPI(app) {
    const amount = document.getElementById("amount").value;

    if (!amount || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    const upiID = "svrtechschool@upi";
    const name = "SVR Techschool";
    const currency = "INR";

    const upiLink = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(name)}&am=${amount}&cu=${currency}`;

    // Try to open the UPI app
    try {
        if (app === "gpay") {
            window.location.href = upiLink;
        } else if (app === "phonepe") {
            window.location.href = upiLink;
        } else {
            alert("Unsupported payment method.");
        }
    } catch (error) {
        alert("Something went wrong. Please try again.");
        console.error(error);
    }
}
