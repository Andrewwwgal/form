(() => {
    let phone = document.querySelector(".form__input--phone");

    $(".form__input--phone").mask("8 ( 999 ) 999-99-99");

    phone.addEventListener("blur", phone_validation);

    function phone_validation(e) {
        let target = e.target.value;
        let uniquePhone = isPhoneUnique(target);

        if (target.length != 19 || !uniquePhone) {
            class_modification(phone, "valid", "invalid");
            
            if (user_data.phone) {
                user_data.phone = false
            }
        } else {
            class_modification(phone, "invalid", "valid");
            user_data.phone = target;
        };

        isFormValid();
    }

    function isPhoneUnique(data) {
        let phone = data;
        let unique = true;

        base.forEach(item => {
            if (item == phone) {
                unique = false;
            } 
        })

        return unique;
    }
})();