import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import coverImg from "../../assets/menu/banner3.jpg"


const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Our Menu | Bistro Boss Restaurant</title>
          </Helmet>
          <Cover img={coverImg} title={"Our menu"} />
    </div>
  );
};

export default Menu;
