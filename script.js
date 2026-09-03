const menuButton = document.getElementById("menuButton");

const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {

    const isOpen = navLinks.style.display === "flex";

    navLinks.style.display = isOpen ? "none" : "flex";

    if (!isOpen) {

        navLinks.style.position = "absolute";
        navLinks.style.top = "72px";
        navLinks.style.left = "0";
        navLinks.style.right = "0";

        navLinks.style.background = "#f6f6f2";

        navLinks.style.padding = "25px";

        navLinks.style.flexDirection = "column";

        navLinks.style.borderBottom = "1px solid #deded8";
    }

});


document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 800) {
            navLinks.style.display = "none";
        }

    });

});
