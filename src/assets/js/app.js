function activate(page) {
  if (document.querySelector(`a[href="${page}"]`)) {
    document.querySelector(`a[href="${page}"]`).classList.add('active');
    return;
  }

  document.querySelector(`a[href="/"]`).classList.add('active');
}

function getCurrentPage() {
  const url = window.location.href;
  let page = url.substr(0, url.length - 1);
  page = page.substr(page.lastIndexOf('/'), page.length);
}

function setActiveLink () {
  const page = getCurrentPage();
  const activeLink = document.querySelector('.header nav.main-menu > ul li > a.active');

  if (activeLink) {
    activeLink.classList.remove('active');
  }

  activate(page);
}
