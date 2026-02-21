import Link from 'next/link'
import Image from 'next/image'


const LandingNavbar = () => {
  return (
     <div className='navbar fixed landing w-full z-10 bg-base-100 border-b-2 border-gray-200 fixed top-0 left-0 right-0'>       
        <div className='navbar-start flex items-center px-4 py-2 w-100'>
           <Link href='/' className='flex items-center gap-2'>            
              <Image src='/assets/logo_white.png' 
                alt='PizzaSquare Logo' 
                width={120} height={100} className='mr-2 pointer rounded-full logo' />            
           </Link>
            <ul className="nav-links">
                <li><Link className='nav-link' href="/">Home</Link></li>
                <li><Link className='nav-link' href="/menu">Menu</Link></li>
                <li><Link className='nav-link' href="/promotions">Promotions</Link></li>
                <li><Link className='nav-link' href="/branches">Branches</Link></li>
                <li><Link className='nav-link' href="/about">About</Link></li>
                <li>
                    <div className="location-badge">
                        <span>📍</span>
                        <span id="currentLocation">Lagos, Nigeria</span>
                    </div>
                </li>
                <li><Link href="#" className="cta-btn">Login Now</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default LandingNavbar
