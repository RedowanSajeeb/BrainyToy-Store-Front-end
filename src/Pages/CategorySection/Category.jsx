import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Math from "./Category/Math";
import Science from "./Category/Science";
import LanguageToys from "./Category/LanguageToys";
import EngineeringTools from "./Category/EngineeringTools";

export default function Category() {


  const data = [
    {
      label: "Math Toys",
      value: "html",
      desc: <Math></Math>,
    },
    {
      label: "Science Toys",
      value: "react",
      desc: <Science></Science>,
    },
    {
      label: "Language Toys",
      value: "vue",
      desc: <LanguageToys></LanguageToys>,
    },
    {
      label: "engineering tools",
      value: "angular",
      desc: <EngineeringTools></EngineeringTools>,
    },
  ];

  return (
    <div data-aos="fade-up" data-aos-duration="3000">
      <h2 className="md:text-4xl text-2xl mb-4 text-center mt-7 md:mt-8 md:mb-5  fontStyle font-bold">
        Shop By <span>Category</span>
      </h2>
      <h3 className="text-center md:mb-5">
        Welcome to our Educational Toy Shop: Explore and Learn!
      </h3>
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
