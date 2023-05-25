import Cover from "../../Shared/Cover/Cover";
import Banner from "../../../assets/banner5.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import { useState } from "react";
import { useParams } from "react-router-dom";

import OrderTab from "./OrderTab";







const Order = () => {
  const categories = ['drinks', 'soup', 'dessert', 'pizza', 'salad']
  const {cetagory} = useParams();
  const initialIndex = categories.indexOf(cetagory)
  const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu();


    const drinks = menu.filter(des => des.category === "drinks");
    const soup = menu.filter(des => des.category === "soup");
    const dessert = menu.filter(des => des.category === "dessert");
    const pizza = menu.filter(des => des.category === "pizza");
    const salad = menu.filter(des => des.category === "salad");

    return (
        <div>
                  <Cover img={Banner} title={'Order Food'} details={'Would you like to try a dish?'}></Cover>     
                  <div>
                  <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="w-full md:w-5/6 mx-auto text-center">
    <TabList>
      <Tab>drinks</Tab>
      <Tab>soup</Tab>
      <Tab>dessert</Tab>
      <Tab>pizza</Tab>
      <Tab>salad</Tab>
    </TabList>

    <TabPanel >
    <OrderTab food={drinks}></OrderTab>
    </TabPanel>
    <TabPanel>
      <OrderTab food={soup}></OrderTab>
    </TabPanel>
    <TabPanel>
    <OrderTab food={dessert}></OrderTab>
    </TabPanel>
    <TabPanel>
    <OrderTab food={pizza}></OrderTab>
    </TabPanel>
    <TabPanel>
    <OrderTab food={salad}></OrderTab>
    </TabPanel>
  </Tabs>
                  </div>
        </div>
    );
};

export default Order;