import AcceuilComp from "../components/acceuilComp";
import Footer from "../components/footer";
import NavBar from "../components/navBar";

function Accueil() {
  return (
    <div>
      <NavBar />
        <AcceuilComp />
      <Footer />
    </div>
  );
}

export default Accueil;
