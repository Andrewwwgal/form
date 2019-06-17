(() => {
    let btn = document.querySelector(".form__btn");
    btn.addEventListener("click", send_data)

    function send_data(e) {
        e.preventDefault();
        console.log("data has been sent successfully!");
    }
})();