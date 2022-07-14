document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const btnBar = document.querySelector('.navbar-toggler');

	const allNavItems = document.querySelectorAll('.nav-link');
	const navList = document.querySelector('.navbar-collapse');

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg');
		} else if (btnBar.classList.contains('collapsed')) {
			nav.classList.remove('shadow-bg');
		} else if (nav.classList.contains('shadow-bg')) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}

	function addShadowMore() {
		if (btnBar.classList.contains('collapsed')) {
			nav.classList.remove('shadow-bg');
		} else {
			nav.classList.add('shadow-bg');
		}
	}

	allNavItems.forEach((item) =>
		item.addEventListener('click', () => navList.classList.remove('show'))
	);

	window.addEventListener('scroll', addShadow);
	btnBar.addEventListener('click', addShadowMore);
});
