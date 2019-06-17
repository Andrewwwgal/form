(() => {
    let password = document.querySelector(".form__input--password");

    password.addEventListener("input", password_validation);

    function password_validation(e) {
        let target = e.target.value;

        if(target.length < 5) {
            class_modification(password, "valid", "invalid");

            if (user_data.pass) {
                user_data.pass = false
            }
        } else {
            user_data.pass = target;
            class_modification(password, "invalid", "valid");
        }

        isFormValid();
    }
})();