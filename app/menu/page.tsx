import MenuControl from "@/components/layouts/MenuControl"
import ProductGrid from "@/components/layouts/ProductGrid"
import Cart from "@/components/ui/Cart"

const page = () => {
  return (
    <section id='landing-menu'>
         <div className='container'>
              <div className="menu-header">
                <h1>OUR DELICIOUS MENU</h1>
                <p>Handcrafted with love, delivered with care</p>
            </div>
            <MenuControl />
            <ProductGrid />
            <Cart />
         </div>
    </section>
  )
}

export default page
