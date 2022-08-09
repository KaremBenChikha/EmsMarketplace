import "./home.css";
import ProductStatistics from "../../components/statistics/ProductStatistics";
import SalesStatistics from "../../components/statistics/SalesStatistics";

export default function ProductAnalytics() {

  return (
    <>
    <div className="home">
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">PRODUCTS STATISTICS</span>
                    <ProductStatistics/>
                <span className="featuredTitle">SALES STATISTICS</span>
                    <SalesStatistics/>
            </div>
        </div>
    </div>
    </>
  );
}
