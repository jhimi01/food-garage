import Cover from "../../Shared/Cover/Cover";
import Banner from "../../../assets/banner5.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import SingleRecommands from "../../Homepage/Recommands/SingleRecommands";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ['drinks', 'soup', 'dessert', 'pizza', 'salad']
  const {cetagory} = useParams();
  const initialIndex = categories.indexOf(cetagory)
  const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu();
    console.log(cetagory)
    console.log(cetagory)


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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {drinks.map(item => <SingleRecommands item={item} key={item._id}></SingleRecommands>)}
    </div>
    </TabPanel>
    <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {soup.map(item => <SingleRecommands item={item} key={item._id}></SingleRecommands>)}
    </div>
    </TabPanel>
    <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {dessert.map(item => <SingleRecommands item={item} key={item._id}></SingleRecommands>)}
    </div>
    </TabPanel>
    <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {pizza.map(item => <SingleRecommands item={item} key={item._id}></SingleRecommands>)}
    </div>
    </TabPanel>
    <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {salad.map(item => <SingleRecommands item={item} key={item._id}></SingleRecommands>)}
    </div>
    </TabPanel>
  </Tabs>
                  </div>
        </div>
    );
};

export default Order;