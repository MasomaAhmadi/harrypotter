
import MyNavbar from "../../components/MyNavbar/MyNavbar";
import CharactersData from "../../groupsData";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
function Characters() {
  console.log(CharactersData);
  return (
    <>
      <MyNavbar />

      <Carousel CharactersData={CharactersData} />

      <Footer />
    </>
  );
}
export default Characters;
