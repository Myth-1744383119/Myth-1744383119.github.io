function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    if (name == "THM" || name == "thm" || name == "陶鸿明") {
        alert("创前任离合，出神_____。");
    }
    else if (password == "20241124") {
        window.location.replace("get404.html");
    }
    else {
        alert(name + "，祝你被三楼的梨核砸");
    }
}
