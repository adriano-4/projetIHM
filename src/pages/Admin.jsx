import Adminlog from "../components/Adminlog";
import "../css/loginAdmin.css";
function Admin() {
  return (
    <div>
      <button id="changer_log">
        <i className="fa fa-exchange"></i>
      </button>
      <Adminlog />
    </div>
  );
}

export default Admin;
