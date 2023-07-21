import { PriceInfo } from "@constants/types"
import "./style.scss";

interface PropType {
    price: PriceInfo,
    from: string,
};

const PriceItem = ({price, from}: PropType) => {
    
    const redirectTo = (url: string) => {
        window.open(url);
    }

    return (
        <div className={`d-flex p-2 pt-3 pb-0 cursor-pointer ${price.featured === true ? 'other-price-item-featured' : 'other-price-item'} `}
            onClick={() => redirectTo(price.url)}>
            {
                from === "" ? (
                    <div className="review-brand-imgonly me-2"></div>
                ) : (
                    <img className="review-brand-imgonly me-2" src={require(`@images/brands/${from}-notext.png`)} />
                )
            }
            <div className={`d-flex flex-grow-1 me-4 pb-3 ${from === '' ? 'border-bottom' : ''}`}>
                <div className="d-flex flex-column flex-grow-1 me-4">
                    {
                        from !== "" && (
                            <span className="small">{from}.com <span className="text-grey-900 fw-bold">{price.featured === true ? "Featured" : ""}</span></span>
                        )
                    }
                    <div className="d-flex">
                        <div className="d-block flex-grow-1">
                            <h6 className="flex-grow-1 mt-2">{price.title}</h6>
                            <div className="d-flex small">
                            {
                                price.priceFeature.freeCancel === true && (
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="pointer-events-none max-h-full max-w-full"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"><path vectorEffect="non-scaling-stroke" d="M17 9l-7 7M10 16l-3-3"></path></g></svg>
                                        Free Cancellation
                                    </div>
                                )
                            }
                            {
                                price.priceFeature.freeBreakfast === true && (
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="pointer-events-none max-h-full max-w-full"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"><path vectorEffect="non-scaling-stroke" d="M17 9l-7 7M10 16l-3-3"></path></g></svg>
                                    Free Breakfast
                                    </div>
                                )
                            }
                            {
                                price.priceFeature.payAtHotel === true && (
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="pointer-events-none max-h-full max-w-full"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"><path vectorEffect="non-scaling-stroke" d="M17 9l-7 7M10 16l-3-3"></path></g></svg>
                                    Pay at the property
                                    </div>
                                )
                            }
                            </div>
                        </div>
                        <div className="d-block">
                            <p className="text-grey-900 fs-5 fw-bold d-block text-end mb-0 pb-0">${price.price}</p>
                            <span className="text-end small mt-0">{`2 nights for $${price.priceTwoNights}`}</span>
                        </div>
                    </div>
                </div>
                <div className={`d-flex flex-column ${price.featured === true ? 'justify-content-end' : 'justify-content-center'} `}>
                    <label className={`btn ${price.featured === true ? 'btn-primary' : 'btn-primary-soft'} `} onClick={() => redirectTo(price.url)}>Visit Site {`>`}</label>
                </div>
            </div>
        </div>
    )
};
export default PriceItem;