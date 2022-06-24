import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [meniItems, setMeniItems] = useState(items);

  const filterCategory = [
    "all",
    ...new Set(
      items.map((thefilteritem) => {
        return thefilteritem.category;
      })
    ),
  ];
  console.log(filterCategory);
  const [categories, setCategories] = useState(filterCategory);
  const filterItems = (category) => {
    if (category == "all") {
      setMeniItems(items);
      return;
    }
    const newItem = items.filter(
      (thecategory) => thecategory.category == category
    );
    setMeniItems(newItem);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>out menu</h2>
          <div className="underline"></div>
          <Categories
            thefilteritemfunction={filterItems}
            thecategory={categories}
          />
          <Menu items={meniItems} />
        </div>
      </section>
    </main>
  );
}

export default App;
