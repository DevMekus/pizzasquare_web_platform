"use client"

const CategoryTabs = () => {
    const filterCategory = function(category){
        console.log("Filtering by category:", category);
        // Implement the logic to filter items based on the selected category
    }

    
  return (
    <div className="category-tabs">
        <button className="category-tab active" onClick={()=>filterCategory("all")}>All Items</button>
        <button className="category-tab" onClick={()=>filterCategory("pizza")}>🍕 Pizza</button>
        <button className="category-tab" onClick={()=>filterCategory("shawarma")}>🌯 Shawarma</button>
        <button className="category-tab" onClick={()=>filterCategory("drinks")}>🥤 Drinks</button>
        <button className="category-tab" onClick={()=>filterCategory("desserts")}>🍰 Desserts</button>
        <button className="category-tab" onClick={()=>filterCategory("sides")}>🍟 Sides</button>
    </div>
  )
}

export default CategoryTabs
