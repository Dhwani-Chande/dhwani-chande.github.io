/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const mobileMenu = document.getElementById("mobileMenu");
const navLinks = document.querySelector(".nav-links");

if (mobileMenu) {

    mobileMenu.addEventListener("click", () => {

        navLinks.classList.toggle("open");

    });

}


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


/* =====================================================
   PROJECT NODE NAVIGATION
===================================================== */

const nodes =
    document.querySelectorAll(".system-node");


nodes.forEach(node => {

    node.addEventListener("click", () => {

        const targetId =
            node.dataset.target;

        const target =
            document.getElementById(targetId);

        if (!target) return;


        target.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });


        target.classList.add("highlight");


        setTimeout(() => {

            target.classList.remove("highlight");

        }, 1800);

    });

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".project, .research-item, .tool-group, .pipeline-item"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.08
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =====================================================
   CURRENT YEAR
===================================================== */

const yearElements =
    document.querySelectorAll(
        "[data-current-year]"
    );


yearElements.forEach(element => {

    element.textContent =
        new Date().getFullYear();

});
