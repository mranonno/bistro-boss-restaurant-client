import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from "../../Components/Cover/Cover";
import FoodCard from "../../Components/FoodCard/FoodCard";
import orderCover from "../../assets/shop/banner2.jpg";
import useMenu from "../../hooks/useMenu";

const Order = () => {
    const [menu] = useMenu();
    const dessert = menu.filter((item) => item.category === "dessert");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const soup = menu.filter((item) => item.category === "soup");
    const offered = menu.filter((item) => item.category === "offered");
    return (
        <div>
            <Cover img={orderCover}/>
            <Tabs>
    <TabList>
      <Tab>SALAD</Tab>
      <Tab>PIZZA</Tab>
      <Tab>SOUPS</Tab>
      <Tab>DESSERTS</Tab>
      <Tab>DRINKS</Tab>
    </TabList>

    <TabPanel>
      {salad.map(item=><FoodCard key={item._id} item={item}/>)}
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Order;