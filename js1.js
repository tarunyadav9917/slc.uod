document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        var otpSuccessMessage = document.getElementById('otp-success');
        otpSuccessMessage.classList.add('hidden');
    }, 10000); // 10000 milliseconds = 10 seconds
});
