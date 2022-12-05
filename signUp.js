const passwordInput = document.querySelector("#password")
const eye = document.querySelector("#eye")

eye.addEventListener("click", () => {
    eye.classList.toggle("fa-eye-slash")
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
    passwordInput.setAttribute("type", type)
});



const signUpImage = document.querySelector(".sign-up-image-image");
const inputs = document.querySelectorAll("input[name='template']")
const images = {
    image1: "./Assets/Sign Up Image.png",
    image2: "./Assets/Page Image.png",
    image3: "./Assets/hero-illustration.png",
    image4: ""
}
inputs.forEach(input => {
    input.addEventListener("click", () => {
        const id = input.id;
        switch (id) {
            case 'template1':
                signUpImage.setAttribute("src", images.image1);
                break;
            case 'template2':
                signUpImage.setAttribute("src", images.image2);
                break;
            case 'template3':
                signUpImage.setAttribute("src", images.image3);
                break;
            case 'template4':
                signUpImage.setAttribute("src", images.image4);
                break;
        }
    })
})
