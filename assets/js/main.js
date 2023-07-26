/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== FONT-SIZE ===============*/
const increaseFontLink = document.querySelector('.increase');
const decreaseFontLink = document.querySelector('.decrease');
const resetFontLink = document.querySelector('.reset');

// Función para aumentar el tamaño de letra
const increaseFontSize = () => {
    // Obtener el tamaño de letra actual
    const currentFontSize = parseFloat(window.getComputedStyle(document.body).fontSize);

    // Aumentar el tamaño de letra en 1 píxel
    const newFontSize = currentFontSize + 3;

    // Aplicar el nuevo tamaño de letra al cuerpo del documento
    document.body.style.fontSize = `${newFontSize}px`;
};

// Función para disminuir el tamaño de letra
const decreaseFontSize = () => {
    // Obtener el tamaño de letra actual
    const currentFontSize = parseFloat(window.getComputedStyle(document.body).fontSize);

    // Disminuir el tamaño de letra en 1 píxel
    const newFontSize = currentFontSize - 3;

    // Aplicar el nuevo tamaño de letra al cuerpo del documento
    document.body.style.fontSize = `${newFontSize}px`;
};

// Función para restablecer el tamaño de letra
const resetFontSize = () => {
    // Restablecer el tamaño de letra a su valor inicial (por ejemplo, 16 píxeles)
    document.body.style.fontSize = '16px';
};

// Asignar el evento clic al enlace
increaseFontLink.addEventListener('click', increaseFontSize);
decreaseFontLink.addEventListener('click', decreaseFontSize);
resetFontLink.addEventListener('click', resetFontSize);

/*=============== CONTRASTE ===============*/
const increaseContrastLink = document.querySelector('.increase-contrast');
const resetContrastLink = document.querySelector('.reset-contrast');
const bodyElement = document.body;

// Función para aumentar el contraste
const increaseContrast = () => {
    bodyElement.classList.add('contrast');
};

// Función para disminuir el contraste
const resetContrast = () => {
    bodyElement.classList.remove('contrast');
};

// Asignar los eventos clic a los enlaces
increaseContrastLink.addEventListener('click', increaseContrast);
resetContrastLink.addEventListener('click', resetContrast);