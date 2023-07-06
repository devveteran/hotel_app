import SearchBar from "@organisms/searchbar";
import styles from './searchbanner.module.scss';

const BannerSection = () => {
    return (
        <section className="pt-0">
            <div className="container">
                <div className={`rounded-3 p-3 p-sm-5 ${styles.searchpage_banner}`}>
                    <div className="row my-2 my-xl-5"> 
                        <div className="col-md-8 mx-auto"> 
                            <h1 className="text-center text-white">150 Hotels in New York</h1>
                        </div>
                    </div>
                    <SearchBar />
                </div>
            </div>
        </section>        
    )
}
export default BannerSection;