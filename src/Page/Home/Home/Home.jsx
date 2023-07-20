import Banner from "../Banner/Banner";
import BestSelers from "../BestSelers/BestSelers";
import Brand from "../Brand/Brand";
import Category from "../Category/Category";
import Extapart from "../Extapart/Extapart";
import LatestProduct from "../LatestProduct/LatestProduct";
import Products from "../Products/Products";
import TopRated from "../TopRated/TopRated";
import VideoSection from "../VideoSection/VideoSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Products></Products>
            <Extapart></Extapart>
            <LatestProduct></LatestProduct>
            <VideoSection></VideoSection>
            <TopRated></TopRated>
            <BestSelers></BestSelers>
            <Brand></Brand>
        </div>
    );
};

export default Home;