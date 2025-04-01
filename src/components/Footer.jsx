function Footer() {
    return (
    <footer>
      <div class="footer-wrapper">
        <div class="footer-content">
          <div class="footer-description">
            <div clss="logo">
              <a href="/"><img src="/public/logo.svg"></img></a>
            </div>
            <div>
              <span>Takeaway & Delivery template for small - medium businesses.</span>
            </div>
          </div>

          <div class="footer-links">
            <div class="footer-links-grid">
              <ul>
                <h3>company</h3>
                <li><a href="/">Home</a></li>
                <li><a href="/">Order</a></li>
                <li><a href="/">FAQ</a></li>
                <li><a href="/">Contact</a></li>
              </ul>
              <ul>
                <h3>TEMPLATE</h3>
                <li><a href="/">Style Guide</a></li>
                <li><a href="/">Changelog</a></li>
                <li><a href="/">Licence</a></li>
                <li><a href="/">Webflow University</a></li>
              </ul>
              <ul>
                <h3>FLOWBASE</h3>
                <li><a href="/">More Cloneables</a></li>
              </ul>
            </div>
          </div>
        </div>

        <span class="footer-line"></span>


        <div class="footer-copyrights">
          <span>Built by <a href="/">Flowbase</a>. Powered by <a href="/">Webflow</a></span>
          <div class="footer-media">
            <ul>
              <li><a href="/"><i class="fa-brands fa-twitter"></i></a></li>
              <li><a href="/"><i class="fa-brands fa-instagram"></i></a></li>
              <li><a href="/"><i class="fa-brands fa-youtube"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    )
  }
  
  export default Footer;
  