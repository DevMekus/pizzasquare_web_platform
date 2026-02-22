

const ProductCard = () => {
  return (
   <>
    <div className="product-card" data-category="pizza">
        <div className="product-image">
            🍕
            <span className="badge popular">Popular</span>
        </div>
        <div className="product-info">
            <div className="product-category">Pizza</div>
            <h3 className="product-name">Margherita classic</h3>
            <p className="product-description">Fresh mozzarella, tomato sauce, basil, and extra virgin olive oil</p>
            <div className="product-meta">
                <div className="product-rating">
                    <span className="stars">⭐⭐⭐⭐⭐</span>
                    <span>4.8 (234)</span>
                </div>
                <div className="product-price">₦3,500</div>
            </div>
            <div className="product-actions">
                <button className="btn-customize">Customize</button>
                <button className="btn-add-cart" >Add to Cart</button>
            </div>
        </div>
    </div>
    
   </>
  )
}

export default ProductCard
