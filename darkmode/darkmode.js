(function () {
    const span = document.querySelector(".mode");
    const darkmodeBtn = document.querySelector('.darkmode__btn');
    const btnRound = document.querySelector('.darkmode__round');
    const html = document.getElementsByTagName('html')[0];
    let mode = "light";


    const osTheme = () => {
        let osMode = "light";
        if (matchMedia) {
            osMode = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            html.classList[osMode === "dark" ? "add" : "remove"]("darkmode");
        }
    }

    const handleDarkMode = () => {
        if (btnRound.className.includes('left')) {
            mode = "osMode";
            btnRound.classList.remove('left');
            btnRound.classList.add('center--r');
            span.innerText = "osMode"
            osTheme()
        }
        else if (btnRound.className.includes('center--r')) {
            mode = "dark"
            btnRound.classList.remove("center--r")
            btnRound.classList.add("right")
            span.innerText = "dark"
            if (!html.className.includes("darkmode")) {
                html.classList.add('darkmode');
            }
        }

        else if (btnRound.className.includes("right")) {
            mode = "osMode"
            btnRound.classList.remove("right")
            btnRound.classList.add("center--l")
            span.innerText = "osMode"
            osTheme();
        }

        else if (btnRound.className.includes("center--l")) {
            mode = "light"
            btnRound.classList.remove('center--l');
            btnRound.classList.add('left');
            span.innerText = "light"
            if (html.className.includes("darkmode")) {
                html.classList.remove('darkmode');
            }
        }
        else {
            return;
        }
    }

    darkmodeBtn.addEventListener('click', handleDarkMode);

    const init = () => {
        if (matchMedia) {
            ['light', 'dark'].forEach(osMode => {
                matchMedia(`(prefers-color-scheme: ${osMode})`).addListener(e => { if (e.matches && mode === "osMode") { osTheme() } })
            })
        }
    }

    init();
})();