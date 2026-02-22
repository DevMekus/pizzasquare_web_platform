import CategoryTabs from "@/components/ui/CategoryTabs";
import SearchFilter from "@/components/ui/SearchFilter";

const MenuControl = () => {
  return (
   <section id="menu-control">
        <div className="menu-controls">
            <CategoryTabs />
            <SearchFilter />
        </div>
   </section>
  )
}

export default MenuControl
