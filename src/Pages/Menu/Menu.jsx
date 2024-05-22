import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import coverImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menu] = useMenu();
  console.log(menu);
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Our Menu | Bistro Boss Restaurant</title>
      </Helmet>
      {/***** Main Cover *****/}
      <Cover img={coverImg} title={"Our menu"} />
      {/***** Offered Category *****/}
      <div className="mb-8">
        <SectionTitle subHeading="Don't miss" heading={"Today's Offer"} />
        <MenuCategory items={offered} />
        <Link to={`/order/${'offered'}`} className="uppercase border-b-4 px-4 py-2 rounded-b-md">
          Order Now
        </Link>
      </div>

      {/***** Dessert Category *****/}
      <div className="mb-8">
        <Cover img={dessertImg} title={"Desserts"} />
        <SectionTitle subHeading="Don't miss" heading={"Today's Offer"} />
        <MenuCategory items={dessert} />
        <Link to={`/order/${'dessert'}`} className="uppercase border-b-4 px-4 py-2 rounded-b-md">
          Order Now
        </Link>
      </div>

      {/***** Pizza Category *****/}
      <div className="mb-8">
        <Cover img={pizzaImg} title={"Pizza"} />
        <SectionTitle subHeading="Don't miss" heading={"Today's Offer"} />
        <MenuCategory items={pizza} />
        <Link to={`/order/${'pizza'}`} className="uppercase border-b-4 px-4 py-2 rounded-b-md">
          Order Now
        </Link>
      </div>

      {/***** Salad Category *****/}
      <div className="mb-8">
        <Cover img={saladImg} title={"salad"} />
        <SectionTitle subHeading="Don't miss" heading={"Today's Offer"} />
        <MenuCategory items={salad} />
        <Link to={`/order/${'salad'}`} className="uppercase border-b-4 px-4 py-2 rounded-b-md">
          Order Now
        </Link>
      </div>

      {/***** Soup Category *****/}
      <div className="mb-8">
        <Cover img={soupImg} title={"Soup"} />
        <SectionTitle subHeading="Don't miss" heading={"Today's Offer"} />
        <MenuCategory items={soup} />
        <Link to={`/order/${'soup'}`} className="uppercase border-b-4 px-4 py-2 rounded-b-md">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Menu;
