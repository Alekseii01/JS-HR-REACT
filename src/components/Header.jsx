import { Button } from "./button/Button"

function Header() {
  return (
    <header>
        <div class="header-wrapper">
          <div clss="logo">
            <a href="/"><img src="../../public/logo.svg"></img></a>
          </div>
          <div class="nav-wrapper">
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Company</a></li>
                <li><a href="/">Login</a></li>
              </ul>
            </nav>
            <div class="cart-block">
                 <><Button><i class="fa-solid fa-cart-shopping"></i></Button></>
                 <div class="cart-content">
                    <h2>0</h2>
                 </div>
            </div>
          </div>
        </div>
    </header>
  );
}

export default Header;
