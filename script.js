const body = document.body
const getBodyTheme = localStorage.getItem('portfolio-theme')
const getBtnTheme = localStorage.getItem('portfolio-btn-theme')
const btnTheme = document.querySelector('.fa-moon')
const btnHamburger = document.querySelector('.fa-bars')

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, buttonClass) => {
	body.classList.remove(localStorage.getItem('portfolio-theme'))
	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))
	body.classList.add(bodyClass)
	btnTheme.classList.add(buttonClass)
	localStorage.setItem('portfolio-theme', bodyClass)
	localStorage.setItem('portfolio-btn-theme', buttonClass)
}

const toggleTheme = () =>
	isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun')

const displayList = () => {
	const navUl = document.querySelector('.nav__list')

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars')
		btnHamburger.classList.add('fa-times')
		navUl.classList.add('display-nav-list')
	} else {
		btnHamburger.classList.remove('fa-times')
		btnHamburger.classList.add('fa-bars')
		navUl.classList.remove('display-nav-list')
	}
}

const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top');
	if (
		body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		btnScrollTop.style.display = 'block';
	} else {
		btnScrollTop.style.display = 'none';
	}
};

btnTheme.addEventListener('click', toggleTheme)
btnHamburger.addEventListener('click', displayList)
document.addEventListener('scroll', scrollUp)

const setBodyTheme = () => body.classList.add(getBodyTheme)
const setBtnTheme = () => btnTheme.classList.add(getBtnTheme)

setBodyTheme()
setBtnTheme()


// Modal

const modal = document.getElementById('simpleModal')
const modalBtn = document.getElementById('modalBtn')
const resumeParent = document.getElementById('modal-content')
const pdf = document.getElementById('resume-pdf')
const newPdf = document.createElement('div')
newPdf.id = 'pdf-parent'
newPdf.innerHTML = `<embed id='resume-pdf' src="Justin Sung's Resume.pdf#toolbar=0" type='application/pdf' width='100%' height='100%' />`


const openModal = () => {
	modal.style.display = 'block';
	pdf.remove();
	resumeParent.appendChild(newPdf)
}

const outsideClick = (e) => {
	if (e.target == modal) {
		modal.style.display = 'none';

	}
}

window.addEventListener('click', outsideClick)
modalBtn.addEventListener('click', openModal);







