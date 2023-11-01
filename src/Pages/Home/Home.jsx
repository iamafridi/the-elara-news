import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftsideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightsideNav/RightSideNav";
import BreakinNews from "./BreakinNews";
import NewsCard from "./NewsCard";

const Home = () => {
const news = useLoaderData();
console.log(news);

    return (
        <div>
            <Header></Header>
            <BreakinNews></BreakinNews>
            <Navbar></Navbar>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div><LeftSideNav></LeftSideNav></div>
                {/* News Container */}
                <div className="col-span-2">
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }
                </div>
                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;