window.onload = () => {

    const name = document.getElementById('name');
    const password = document.getElementById('password');
    const bt = document.getElementById('bt');
    const form_login = document.getElementById('form_login');
    const description = document.getElementById('description');
    const text = document.getElementById('text');

    const validarCampos = () => {
        if (name.value.trim() !== "" && password.value.trim() !== "") {
            bt.disabled = false;
            bt.style.backgroundColor = "#000000";
            bt.style.color = "#FFF";
        } else {
            bt.disabled = true;
            bt.style.backgroundColor = "";
            bt.style.color = "";
        }
    };

    name.onblur = () => {
        if (name.value.trim() === "") {
            name.style.backgroundColor = "rgb(234, 189, 189)";
        } else {
            name.style.backgroundColor = "#FFF";
        }
        validarCampos();
    };

    password.onblur = () => {
        if (password.value.trim() === "") {
            password.style.backgroundColor = "rgb(234, 189, 189)";
        } else {
            password.style.backgroundColor = "#FFF";
        }
        validarCampos();
    };

    form_login.onsubmit = () => {

        if (name.value.trim() === "" || password.value.trim() === "") {
            alert('Invalid name or password! Try again.');
        } else {
            alert(`Welcome ${name.value}!`);

            text.innerHTML = `You are logged, ${name.value}!`
            description.innerHTML = 'Login well suceeded'

            form_login.style.display = "none";
        }
    };


};
