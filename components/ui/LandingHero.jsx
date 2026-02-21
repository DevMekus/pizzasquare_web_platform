import Image from "next/image"

const LandingHero = () => {
  return (
  <section id="landing-hero">
    <div className="home-hero">
       <div className="hero-content">
                <div className="hero-text">
                    <h1 className="text-5xl font-bold mb-4">
                            FRESHLY MADE,<br/>
                        <span className="highlight">PERFECTLY</span><br/>
                        SQUARED
                    </h1>
                        <p>Experience pizza like never before. Every slice is a perfect square of deliciousness, crafted with premium ingredients and delivered hot to your door.</p>
                    <div className="hero-actions">
                        <button className="btn-primary">Browse Menu</button>
                        <button className="btn-secondary">Track Order</button>
                    </div>
                </div>
                  <div className="hero-image">
                    <div className="pizza-display">
                    <Image
                        src="/assets/pizza2.png"
                        alt="Delicious Square Pizza"
                        width={5000}
                        height={500}
                        className="pizza-image"
                    />                        
                    </div>
                </div>
            </div>
    </div>
  </section>
  )
}

export default LandingHero
