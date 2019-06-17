let user_data = {
    phone: false,
    pass: false
};

function class_modification(obj, remove, add) {
    if (obj.classList.contains(`form__input--${remove}`) && obj.parentNode.classList.contains(`form__input-wrapper--${remove}`)) {
        obj.classList.remove(`form__input--${remove}`);
        obj.parentNode.classList.remove(`form__input-wrapper--${remove}`);
    }

    obj.classList.add(`form__input--${add}`);
    obj.parentNode.classList.add(`form__input-wrapper--${add}`);
}

function isFormValid() {
    let { phone, pass } = user_data;
    let btn = document.querySelector(".form__btn");
    if (phone && pass) {
        btn.disabled = false;    
    } else {
        btn.disabled = true;
    }
}

isFormValid();