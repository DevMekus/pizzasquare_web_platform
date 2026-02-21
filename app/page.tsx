import LandingHero from "@/components/ui/LandingHero"
import HomeStats from "@/components/ui/HomeStats"
import PromoBanner from "@/components/layouts/PromoBanner"
import ProductCategory from "@/components/layouts/ProductCategory"

const page = () => {
  return (
    <div>
        <LandingHero/>
        <HomeStats/>
        <PromoBanner/>
        <ProductCategory/>
    </div>
  )
}

export default page
