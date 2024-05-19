import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import image from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item bg-fixed mt-24">
      <div className="bg-slate-900 bg-opacity-70 py-8">
        <SectionTitle heading={"From Our Menu"} subHeading={"Check it Out"} />
        <div className="md:flex justify-center gap-12 text-white  px-36 mb-20 mt-8">
          <div>
            <img src={image} />
          </div>
          <div>
            <p>March 2, 2023</p>
            <h3 className="uppercase">where get i some</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
              doloribus id vel, aspernatur explicabo unde maxime. Dolores velit
              quisquam necessitatibus beatae! Reprehenderit quidem ex
              accusantium iste deleniti voluptates nostrum perspiciatis.
            </p>
            <button className="uppercase border-b-4 py-2 rounded-b-md">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
