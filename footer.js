class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class=" footer">
        <div class="d-flex-column footer-items-container">
          <h3 class="text-align-center footer-header">
            partner
          </h3>
          <ul class="footer-list d-flex flex-wrap justify-content-center">
            <li><a class="footer-links" href="#">mozilla</a></li>
            <li><a class="footer-links" href="#">Google</a></li>
            <li><a class="footer-links" href="#">Hub</a></li>
            <li><a class="footer-links" href="#">Microsoft-Kenya</a></li>
          </ul>
        </div>
        <div class="d-flex footer-logo justify-content-center align-items-center">
          <div class="footer-logo-icon d-flex align-items-center">
            <img class="icon-fluid footer-icon" src="icons/Digital innovation_0.png" alt="">
            <span class="footer-tag">
              Digital Master Plan Kenya
            </span>
          </div>
          <div>
            <span>
              2023 Digital Master Plan Kenya some rights reserved
            </span>
          </div>
        </div>
      </footer>

    `;
  }
}

customElements.define('my-footer', Footer);