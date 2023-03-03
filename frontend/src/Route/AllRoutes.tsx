import { Route,Routes } from "react-router-dom";
import Home from "../Pages/Home";
import UserPage from "../Pages/UserPage";
function AllRoutes() {
    return (
      <div>

        <Routes>
          {/* <Route path="/" element={<Home setShowModal={setShowModal} />} /> */}
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </div>
    );
  }
  export default AllRoutes;