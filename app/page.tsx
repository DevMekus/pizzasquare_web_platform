import LandingHero from "@/components/ui/LandingHero"
import HomeStats from "@/components/ui/HomeStats"
import PromoBanner from "@/components/layouts/PromoBanner"
import ProductCategory from "@/components/layouts/ProductCategory"
import BranchLocations from "@/components/layouts/BranchLocations"

const page = () => {
  return (
    <div>
        <LandingHero/>
        <HomeStats/>
        <PromoBanner/>
        <ProductCategory/>
        <BranchLocations/>
    </div>
  )
}

export default page
