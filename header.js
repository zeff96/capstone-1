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