"use client";

import React, { useState } from "react";
import Checkbox from "./CheckBox";

// import MySwitch from "components/MySwitch";

// DEMO DATA
const DATA_categories = [
  {
    name: "Backpacks",
  },
  {
    name: "Travel Bags",
  },
  {
    name: "Laptop Sleeves",
  },
  {
    name: "Organization",
  },
  {
    name: "Accessories",
  },
];

const SidebarFilters = () => {
  const [categoriesState, setCategoriesState] = useState<string[]>([]);

  const handleChangeCategories = (checked: boolean, name: string) => {
    checked
      ? setCategoriesState([...categoriesState, name])
      : setCategoriesState(categoriesState.filter((i) => i !== name));
  };

  return (
    <div className="divide-y divide-slate-200 dark:divide-slate-700">
      <div className="relative flex flex-col pb-8 space-y-4 ">
        <h3 className="font-semibold mb-2.5">Categories</h3>
        {DATA_categories.map((item) => (
          <div key={item.name} className="">
            <Checkbox
              name={item.name}
              label={item.name}
              defaultChecked={categoriesState.includes(item.name)}
              sizeClassName="w-5 h-5"
              labelClassName="text-sm text-black font-normal"
              onChange={(checked) => handleChangeCategories(checked, item.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarFilters;
