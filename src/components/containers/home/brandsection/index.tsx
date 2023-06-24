const BrandSection = () => {
    return (
        <section className="py-0 py-md-5">
            <div className="container">
                <div className="row g-4 g-lg-7 justify-content-center align-items-center">
                    <div className="col-5 col-sm-3 col-xl-2">
                        <img src={require("@images/client/01.svg").default} className="grayscale" alt=""/>
                    </div>
                    <div className="col-5 col-sm-3 col-xl-2">
                        <img src={require("@images/client/02.svg").default} className="grayscale" alt=""/>
                    </div>
                    <div className="col-5 col-sm-3 col-xl-2">
                        <img src={require("@images/client/03.svg").default} className="grayscale" alt=""/>
                    </div>
                    <div className="col-5 col-sm-3 col-xl-2">
                        <img src={require("@images/client/04.svg").default} className="grayscale" alt=""/>
                    </div>
                    <div className="col-5 col-sm-3 col-xl-2">
                        <img src={require("@images/client/05.svg").default} className="grayscale" alt=""/>
                    </div>
                    <div className="col-5 col-sm-3 col-xl-2">
                        <img src={require("@images/client/06.svg").default} className="grayscale" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BrandSection;