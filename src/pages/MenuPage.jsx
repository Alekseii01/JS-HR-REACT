import { Button, ButtonMenu } from "../components/button/Button.jsx"
import { Tooltip } from "../components/tooltip/Tooltip.jsx";
import { OrderCards } from "../components/OrderCards.jsx";

function Menu() {
  return (
      <section class="main">
          <div class="main-wrapper">
              <div class="main-title">
                <h1>Browse our menu</h1>
                <p>Use our menu to place an order online, or <Tooltip text="+370 390-90-80"><span style={{ color: "#35B8BE" }}>phone</span></Tooltip> our store to place a pickup order. Fast and fresh food.</p>
              </div>
              <div class="main-menu-list">
                <div class="button-wrapper menu">
                  <>
                    <ButtonMenu>Desert</ButtonMenu>
                    <ButtonMenu>Dinner</ButtonMenu>
                    <ButtonMenu>Breakfast</ButtonMenu>
                  </>
                </div>
              <div class="menu-wrapper">
                <><OrderCards /></>
              </div>
              <div class="button-load"><><Button>See more</Button></></div>
              </div>
          </div>
      </section>
  );
}

export default Menu;
