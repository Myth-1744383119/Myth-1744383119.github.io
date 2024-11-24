function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    if (password == "20241124") {
        window.location.replace("../HTML/home.html");
    }
    else {
        alert(name + "，祝你被三楼的梨核砸");
    }
}
