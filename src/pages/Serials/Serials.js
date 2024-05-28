import MyNavbar from "../../components/MyNavbar/MyNavbar";
import SerialsCards from "../../components/SerialsCards/SerialsCards";
import { serials } from "../../groupsData";
import "./Serials.css";
import Footer from "../../components/Footer/Footer";

function watchSerials() {
  return (
    <>
      <MyNavbar />
      <div className="flexbox">
        <h3 className="pad-right">مجموعه سریال های هری پاتر با دوبله فارسی:</h3>
        <div className="grid-container serials-img">
          {serials.map((serial) => (
            <SerialsCards {...serial} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default watchSerials;
