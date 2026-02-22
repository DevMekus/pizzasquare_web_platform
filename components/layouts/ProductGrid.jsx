import ProductCard from "@/components/ui/ProductCard"
import ProductModal from "@/components/ui/ProductModal"

const ProductGrid = () => {
  return (
   <>
    <div className="products-grid" id="productsGrid">
      <ProductCard/>     
    </div>
    <ProductModal/>
   </>
  )
}

export default ProductGrid
