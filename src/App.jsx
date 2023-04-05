import { Outlet } from "react-router";
import HeaderNav from "./components/HeaderNav";
import Pagination from "./components/Pagination";
import InfoCard from "./pages/InfoJobs";
import AuthConsumer from "./hooks/auth";
import HomePage from "./pages/HomePage";
// import { UilUser } from "@iconscout/react-unicons";

function App() {
  // const [authed, dispatch] = AuthConsumer();
  // console.log(authed);
  return (
    <div className=" flex flex-col items-center h-screen w-full">
      <HeaderNav />
      <div className="w-full bg-info h-screen md:h-full p-3 sm:h-full xl:h-full flex justify-center items-center ">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
