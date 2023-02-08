class Menu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header class="head-header container">
          <div class="menu">
            <i class="fa-solid fa-bars"></i>
          </div>
          <nav class="nav d-active d-none">
            <div class="links d-flex">
              <ul class="links-items d-flex align-items-center">
                <li><a href="#"><i class="fa-brands fa-facebook social-link"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-twitter social-link"></i></a></li>
                <li><a class="social-link" href="">english</a></li>
                <li><a class="social-link"  href="">mypage</a></li>
                <li><a class="social-link"  href="">logout</a></li>
              </ul>
            </div>
            <div class="navbar d-flex-column align-items-start">
              <div class="close-icon">
                <i class="fa-solid fa-xmark"></i>
              </div>
              <div class="logo d-flex align-items-center">
                <a class="home-icon" href="index.html">
                  <img class="icon-fluid" src="icons/Digital innovation_0.png" alt="">
                </a>
                <p class="home-icon-info">Digital Master Plan 2023</P>
                <a class="home-page-icon" href="index.html">
                  <i class="fa-solid fa-house"></i>
                  Home
                </a>
              </div>
              <ul class="nav-items d-flex-column">
                <li class="nav-list-items">
                  <a href="about.html" class="nav-links">
                    <div class="pop-icons">
                      <i class="fa-solid fa-circle-info"></i>
                    </div>
                    about
                  </a>
                </li>
                <li class="nav-list-items">
                  <a href="programs.html" class="nav-links">
                    <div class="pop-icons">
                      <i class="fa-regular fa-calendar"></i>
                    </div>
                    programs
                  </a>
                </li>
                <li class="nav-list-items">
                  <a href="join.html" class="nav-links">
                    <div class="pop-icons">
                      <i class="fa-solid fa-users"></i>
                    </div>
                    join
                  </a>
                </li>
                <li class="nav-list-items">
                  <a href="sponsor" class="nav-links">
                    <div class="pop-icons">
                      <i class="fa-solid fa-circle-dollar-to-slot"></i>
                    </div>
                    sponsor
                  </a>
                </li>
                <li class="nav-list-items">
                  <a href="news.html" class="nav-links">
                    <div class="pop-icons">
                      <i class="fa-solid fa-newspaper home"></i>
                    </div>
                    news
                  </a>
                </li>
                <li class="nav-list-items">
                  <a href="campaign.html" class="nav-links campaign">DMP campaign</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
    `;
  }
}

customElements.define('my-menu', Menu);

const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const closeEl = document.querySelector('.fa-xmark');
const navLinks = document.querySelectorAll('.nav-links');
const activePage = window.location.pathname;

const body = document.querySelector('body');

const sec = document.getElementById('speakers');

function showMenu() {
  nav.classList.remove('d-none');
  body.classList.add('no-scroll');
}

function closePop() {
  nav.classList.add('d-none');
  body.classList.remove('no-scroll');
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.add('d-none');
    body.classList.remove('no-scroll');
  });
});

menu.addEventListener('click', showMenu);
closeEl.addEventListener('click', closePop);

navLinks.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('scrollspy');
  }
});

const speakersArray = [
  {
    name: 'Sarah smith',
    title: 'Professor of IT UoN university',
    profilepicture: 'https://randomuser.me/api/portraits/women/62.jpg',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum porro voluptate ullam corporis assumenda iste laborum perspiciatis. Esse, minima dicta.',
  }, {
    name: 'John Doe',
    title: 'Director of Computer Science MMUT University',
    profilepicture: 'https://randomuser.me/api/portraits/men/5.jpg',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum porro voluptate ullam corporis assumenda iste laborum perspiciatis. Esse, minima dicta.',
  }, {
    name: 'Tom Harry',
    title: 'It Expert',
    profilepicture: 'https://randomuser.me/api/portraits/men/10.jpg',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum porro voluptate ullam corporis assumenda iste laborum perspiciatis. Esse, minima dicta.',
  }, {
    name: 'Jane Doe',
    title: 'Lecturer MKU University',
    profilepicture: 'https://randomuser.me/api/portraits/women/12.jpg',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum porro voluptate ullam corporis assumenda iste laborum perspiciatis. Esse, minima dicta.',
  }, {
    name: 'Joe Blogs',
    title: 'Networking and System Security Expert',
    profilepicture: 'https://randomuser.me/api/portraits/men/12.jpg',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum porro voluptate ullam corporis assumenda iste laborum perspiciatis. Esse, minima dicta.',
  }, {
    name: 'Jane Smith',
    title: 'Data Analyst',
    profilepicture: 'https://randomuser.me/api/portraits/women/2.jpg',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum porro voluptate ullam corporis assumenda iste laborum perspiciatis. Esse, minima dicta.',
  },
];

const cardContainer = document.createElement('div');
cardContainer.className = 'card-container';

const speakers = Object.keys(speakersArray);

window.onload = () => {
  speakers.forEach((speaker) => {
    const card = document.createElement('div');
    card.className += 'd-flex card';
    const cardImg = document.createElement('div');
    const cardInfo = document.createElement('div');
    cardInfo.className = 'd-flex-column cardinfo';
    const name = document.createElement('h2');
    name.className = 'name';
    name.innerHTML = speakersArray[speaker].name;
    const title = document.createElement('h3');
    title.className = 'heading speaker-title';
    title.innerHTML = speakersArray[speaker].title;
    const profilepicture = document.createElement('img');
    profilepicture.setAttribute('src', speakersArray[speaker].profilepicture);
    const bio = document.createElement('p');
    bio.className = 'bio';
    bio.innerHTML = speakersArray[speaker].bio;
    cardImg.appendChild(profilepicture);
    cardInfo.append(name, title, bio);
    card.append(cardImg, cardInfo);
    cardContainer.appendChild(card);
    sec.appendChild(cardContainer);
  });
};