class Menu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="fixed-top">
        <div class="social navbar navbar-expand-md bg-dark">
          <div class="container">
            <ul class="navbar-nav ms-auto gap-3">
              <li><a href="#"><i class="fa-brands fa-facebook text-white text-decoration-none"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-twitter text-white text-decoration-none"></i></a></li>
              <li><a class="text-white text-decoration-none" href="">english</a></li>
              <li><a class="text-white text-decoration-none"  href="">mypage</a></li>
              <li><a class="text-white text-decoration-none"  href="">logout</a></li>
            </ul>
          </div>
        </div>
        <nav class="navbar navbar-expand-md bg-white text-dark">
          <div class="container">
            <a class="navbar-brand" href="index.html">
              <img class="logo" src="icons/Digital innovation_0.png" alt="header-icon">
              Master Plan 2023
            </a>
            <button class="navbar-toggler"
            type="button" data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a href="about.html" class="nav-link">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a href="programs.html" class="nav-link">
                    Programs
                  </a>
                </li>
                <li class="nav-item">
                  <a href="join.html" class="nav-link">
                    Join
                  </a>
                </li>
                <li class="nav-item">
                  <a href="sponsor" class="nav-link">
                    Sponsor
                  </a>
                </li>
                <li class="nav-item">
                  <a href="news.html" class="nav-link">
                    News
                  </a>
                </li>
                <li class="nav-item">
                  <a href="campaign.html" class="nav-link border border-danger" style="color: #ec5242">
                    DMP Campaign
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    `;
  }
}

customElements.define("my-nav", Menu);
