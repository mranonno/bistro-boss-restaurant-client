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

const Menu = () => {
  const [menu] = useMenu();
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
      <SectionTitle subHeading="Don't miss" heading={"Today's Offer"} />
      <MenuCategory items={offered} />
      {/***** Dessert Category *****/}
      <Cover img={dessertImg} title={"Desserts"} />
      <SectionTitle subHeading="Don't miss" heading={"Today's Offer"} />
      <MenuCategory items={dessert} />
      {/***** Pizza Category *****/}
      <Cover img={pizzaImg} title={"Pizza"} />
      <SectionTitle subHeading="Don't miss" heading={"Today's Offer"} />
      <MenuCategory items={pizza} />
      {/***** Salad Category *****/}
      <Cover img={saladImg} title={"salad"} />
      <SectionTitle subHeading="Don't miss" heading={"Today's Offer"} />
      <MenuCategory items={salad} />
      {/***** Soup Category *****/}
      <Cover img={soupImg} title={"Soup"} />
      <SectionTitle subHeading="Don't miss" heading={"Today's Offer"} />
      <MenuCategory items={soup} />
    </div>
  );
};

export default Menu;
