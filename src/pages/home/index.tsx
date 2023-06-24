import Header from "@containers/common/header";
import './style.scss';
import BannerSection from "@containers/home/bannersection";
import CarouselSection from "@containers/home/carouselsection";
import StorySection from "@containers/home/storysection";
import FeaturedHotels from "@containers/home/featuredhotels";
import BrandSection from "@containers/home/brandsection";
import TeamSection from "@containers/home/teamsection";
import ExploreSection from "@containers/home/exploresection";
import ReferenceSection from "@containers/home/refsection";
import Footer from "@containers/common/footer";
import { useState, useEffect } from 'react';
import TestHeader from "@containers/common/testheader";
const Home = () => {
    const [scroll, setScroll] = useState(false);

    const onClickScrollToTop = () => {
        window.scrollTo({top:0, behavior:'smooth'});
    }
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY < 300 )
                setScroll(false);
            else 
                setScroll(true);
        }
      
        document.addEventListener("scroll", onScroll)
        return () => {
             document.removeEventListener("scroll", onScroll)
            }
      }, [scroll, setScroll])
      
    return (
        <div className='home-view'>
            {/* <Header scroll={false}/> */}
            <TestHeader scroll={scroll}/>
            <BannerSection />
            <CarouselSection />
            <StorySection />
            <FeaturedHotels />
            <BrandSection />
            <TeamSection />
            <ExploreSection />
            <ReferenceSection />
            <Footer />
            <div className={`back-top ${scroll ? 'back-top-show' : ''}`} onClick={onClickScrollToTop}></div>
            <div className="navbar navbar-mobile">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="index.html"><i className="bi bi-house-door fa-fw"></i>
                            <span className="mb-0 nav-text">Home</span>
                        </a>	
                    </li>

                    <li className="nav-item"> 
                        <a className="nav-link" href="account-bookings.html"><i className="bi bi-briefcase fa-fw"></i>
                            <span className="mb-0 nav-text">My Trips</span>
                        </a>	
                    </li>

                    <li className="nav-item"> 
                        <a className="nav-link" href="offer-detail.html"><i className="bi bi-percent fa-fw"></i>
                            <span className="mb-0 nav-text">Offer</span> 
                        </a>
                    </li>

                    <li className="nav-item"> 
                        <a className="nav-link" href="account-profile.html"><i className="bi bi-person-circle fa-fw"></i>
                            <span className="mb-0 nav-text">Account</span>
                        </a>
                    </li>
                </ul>
            </div>            
        </div>
    )
}
export default Home;