import { useState } from "react";
import Deconnecter from "../components/deconnecter";
import NavBarAdmin from "../components/navBarAdmin";

function AdminPage() {
  const [showDeco, setShowDeco] = useState(false);
  return (
    <div>
      <NavBarAdmin setShowDeco={setShowDeco} />
      {/* <Deconnecter/> */}
      {showDeco && <Deconnecter setShowDeco={setShowDeco} />}
    </div>
  );
}

export default AdminPage;
