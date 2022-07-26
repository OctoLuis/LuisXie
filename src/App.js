import "./styles.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Footer />
    </div>
  );
}
