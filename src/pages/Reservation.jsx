import Crud from "../components/crud";
import NavBarPage from "../components/navBarPage";

function Reservation() {
  return (
    <div>
      <NavBarPage />
      <Crud
        titre="reservation"
        headers={["ID", "Nom", "Prénom", "Email", "Rôle"]}
      />
    </div>
  );
}

export default Reservation;
