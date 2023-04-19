const section = document.querySelector("#persons");

const speakers = [
  {
    name: "Sarah Smith",
    title: "Professor of IT UoN university",
    profilepicture: "https://randomuser.me/api/portraits/women/62.jpg",
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum porro voluptate ullam corporis assumenda iste laborum perspiciatis. Esse, minima dicta.",
  },
  {
    name: "John Doe",
    title: "Director of Computer Science MMUT University",
    profilepicture: "https://randomuser.me/api/portraits/men/5.jpg",
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum porro voluptate ullam corporis assumenda iste laborum perspiciatis. Esse, minima dicta.",
  },
  {
    name: "Tom Harry",
    title: "It Expert",
    profilepicture: "https://randomuser.me/api/portraits/men/10.jpg",
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum porro voluptate ullam corporis assumenda iste laborum perspiciatis. Esse, minima dicta.",
  },
  {
    name: "Jane Doe",
    title: "Lecturer MKU University",
    profilepicture: "https://randomuser.me/api/portraits/women/12.jpg",
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum porro voluptate ullam corporis assumenda iste laborum perspiciatis. Esse, minima dicta.",
  },
  {
    name: "Joe Blogs",
    title: "Networking and System Security Expert",
    profilepicture: "https://randomuser.me/api/portraits/men/12.jpg",
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum porro voluptate ullam corporis assumenda iste laborum perspiciatis. Esse, minima dicta.",
  },
  {
    name: "Jane Smith",
    title: "Data Analyst",
    profilepicture: "https://randomuser.me/api/portraits/women/2.jpg",
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum porro voluptate ullam corporis assumenda iste laborum perspiciatis. Esse, minima dicta.",
  },
];

const render = () => {
  speakers.forEach((speaker) => {
    const person = `
      <div class="d-flex gap-3 p-3 col-md-6">
        <div>
          <img src="${speaker.profilepicture}" alt="${speaker.name}">
        </div>
        <div>
          <h3 class="fw-bold">${speaker.name}</h3>
          <h6 class="fst-italic" style="color: #ec5242">
          ${speaker.title}
          <hr
            style="
              width: 2rem;
              margin-top: 0.5rem;
              color: #272930;
            "
          />
          </h6>
          <p>${speaker.bio}</p>
        </div>
      </div>  
    `;

    section.insertAdjacentHTML("beforeend", person);
  });
};

window.onload = render;
