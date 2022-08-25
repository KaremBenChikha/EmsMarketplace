import "./single.css";
import SinglePost from "../../components/singlePost/SinglePost";
import Footer from "../../components/Footer";
export default function Single() {
  return (
    <>
    <div className="single">
      <SinglePost/>
    </div>
    <Footer/>
    </>
  );
}