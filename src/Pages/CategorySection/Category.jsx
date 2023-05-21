import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Math from "./Category/Math";

export default function Category() {

    const mathToysHandaler = () =>{
        fetch("http://localhost:5000/categorymath",{
            method: "GET",
           
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }


  const data = [
    {
      label: <Link onClick={mathToysHandaler}>Math Toys</Link>,
      value: "html",
      desc: <Math></Math>,
    },
    {
      label: "Science Toys",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Language Toys",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "engineering tools",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];

  return (
    <div>
      <h2 className="text-4xl text-center mt-7 md:mt-8 md:mb-10 font-bold">
        Shop By <span>Category</span>
      </h2>
      <Tabs className="mt-6" value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
