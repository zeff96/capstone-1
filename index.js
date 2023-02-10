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