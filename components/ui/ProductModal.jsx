import React from 'react'

const ProductModal = () => {
  return (
    <div className='product-modal-container'>
        <div className="modal" id="productModal">
            <div className="modal-content">
                <div className="modal-close">✕</div>
                <div className="product-detail">
                    <div className="detail-image" id="detailImage">🍕</div>
                    <div className="detail-info">
                        <h2 id="detailName">Margherita classic</h2>
                        <div className="product-rating">
                            <span className="stars">⭐⭐⭐⭐⭐</span>
                            <span>4.8 (234 reviews)</span>
                        </div>
                        <p className="product-description" id="detailDescription">
                            Fresh mozzarella, tomato sauce, basil, and extra virgin olive oil on our signature square crust
                        </p>

                        <div className="customization-section">
                            <h3>Choose Size</h3>
                            <div className="options-grid">
                                <div className="option-item selected">
                                    <span>Small (9")</span>
                                    <span>₦3,500</span>
                                </div>
                                <div className="option-item">
                                    <span>Medium (12")</span>
                                    <span>₦5,000</span>
                                </div>
                                <div className="option-item">
                                    <span>Large (15")</span>
                                    <span>₦7,000</span>
                                </div>
                                <div className="option-item">
                                    <span>X-Large (18")</span>
                                    <span>₦9,500</span>
                                </div>
                            </div>
                        </div>

                        <div className="customization-section">
                            <h3>Extra Toppings (+₦300 each)</h3>
                            <div className="options-grid">
                                <div className="option-item">
                                    <span>🧀 Extra Cheese</span>
                                </div>
                                <div className="option-item">
                                    <span>🥓 Bacon</span>
                                </div>
                                <div className="option-item">
                                    <span>🍄 Mushrooms</span>
                                </div>
                                <div className="option-item">
                                    <span>🫑 Bell Peppers</span>
                                </div>
                            </div>
                        </div>

                        <div className="quantity-control">
                            <button className="qty-btn">-</button>
                            <div className="qty-display" id="qtyDisplay">1</div>
                            <button className="qty-btn">+</button>
                        </div>

                        <div className="detail-price" id="detailPrice">₦3,500</div>

                        <button className="btn-add-cart">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductModal
