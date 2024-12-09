function redirectToGPay() {
    const amount = document.getElementById("amount").value;

    if (!amount || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    // Google Pay UPI link
    const upiLink = `upi://pay?pa=svrtechschool@upi&pn=SVR%20Techschool&am=${amount}&cu=INR`;
    window.location.href = upiLink;
}

function redirectToPhonePe() {
    const amount = document.getElementById("amount").value;

    if (!amount || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    // PhonePe UPI link
    const upiLink = `upi://pay?pa=svrtechschool@upi&pn=SVR%20Techschool&am=${amount}&cu=INR`;
    window.location.href = upiLink;
}
