import "./styles.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import { gsap } from "gsap";

document.body.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY
  });
});

var redArea = document.getElementById("ska");
var myCursor = document.getElementById("csr");
var clickables = document.getElementsByClassName("cli-item");

var isHover = (ee) => ee.parentElement.querySelector(":hover") === ee;

document.addEventListener("mousemove", function checkHover() {
  var hoveredRed = false;
  if (redArea) {
    hoveredRed = isHover(redArea);
  }

  var enlarge = false;
  if (clickables) {
    for (let i = 0; i < clickables.length; i++) {
      var hoveredcla = isHover(clickables[i]);

      if (hoveredcla) {
        enlarge = true;
        break;
      }
    }
  }

  if (enlarge === true) {
    myCursor.style.width = "28px";
    myCursor.style.height = "28px";
    myCursor.style.margin = "-14px";
    myCursor.style.opacity = "0.5";
  } else if (enlarge === false) {
    myCursor.style.width = "12px";
    myCursor.style.height = "12px";
    myCursor.style.margin = "-6px";
    myCursor.style.opacity = "0.8";
  }

  if (hoveredRed === true) {
    myCursor.style.background = "white";
  } else if (hoveredRed === false) {
    myCursor.style.background = "red";
  }
});

export default function App() {
  return (
    <div className="App">
      <Cursor />
      <NavigationBar />
      <section className="full-vh df aic justify-content-center">
        <h1 className="text-light font-pr">Under Construction</h1>
      </section>
      <Footer />
    </div>
  );
}
