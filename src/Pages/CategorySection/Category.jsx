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
