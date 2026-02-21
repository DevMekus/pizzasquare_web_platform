

const ProductCategory = ({title = "WHAT'S YOUR CRAVING?", subtext = "From classic pizzas to exotic shawarmas, we've got something for everyone"}) => {
  return (  
    <section id="landing-product-category">
        <div className="categories" id="menu">
            <div className="section-header">
                <h2>{title}</h2>
                <p>{subtext}</p>
            </div>
            <div className="category-grid">
                <div className="category-card">
                    <div className="category-icon">🍕</div>
                    <h3>PIZZAS</h3>
                    <p>classic & Signature Pizzas</p>
                </div>
                <div className="category-card">
                    <div className="category-icon">🌯</div>
                    <h3>SHAWARMA</h3>
                    <p>Authentic Middle Eastern</p>
                </div>
                <div className="category-card">
                    <div className="category-icon">🥤</div>
                    <h3>DRINKS</h3>
                    <p>Refreshing Beverages</p>
                </div>
                <div className="category-card">
                    <div className="category-icon">🍰</div>
                    <h3>DESSERTS</h3>
                    <p>Sweet Treats</p>
                </div>
                <div className="category-card">
                    <div className="category-icon">🍟</div>
                    <h3>SIDES</h3>
                    <p>Perfect Complements</p>
                </div>
                <div className="category-card">
                    <div className="category-icon">🎁</div>
                    <h3>COMBOS</h3>
                    <p>Value Meal Deals</p>
                </div>
            </div>
        </div>
    </section>  
    

  )
}

export default ProductCategory
