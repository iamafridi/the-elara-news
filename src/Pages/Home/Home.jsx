import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftsideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightsideNav/RightSideNav";
import BreakinNews from "./BreakinNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakinNews></BreakinNews>
            <Navbar></Navbar>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div><LeftSideNav></LeftSideNav></div>
                <div className="col-span-2">
                    <h2 className="text-3xl">News Coming soon</h2>
                </div>
                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;