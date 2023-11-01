import Marquee from "react-fast-marquee";

const BreakinNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-danger">Breaking News</button>
            <Marquee pauseOnHover={true} speed={130}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BreakinNews;