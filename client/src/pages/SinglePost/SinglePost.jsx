import "./single.css";
import SinglePost from "../../components/singlePost/SinglePost";
import Na from "../../components/navbar/Na";
export default function Single() {
  return (
    <>
      <br/>
      <Na/>
    <div className="single">
      <SinglePost/>

    </div>
    </>
  );
}