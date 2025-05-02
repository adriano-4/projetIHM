import Crud from "../components/crud";
import NavBarPage from "../components/navBarPage";

function Reservation() {
  return (
    <div>
      <NavBarPage />
      <Crud titre="reservation" headers={["Date", "Nom", "Numero", "place"]} />
    </div>
  );
}

export default Reservation;
