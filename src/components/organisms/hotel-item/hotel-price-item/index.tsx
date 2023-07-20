import { PriceInfo } from "@constants/types"

interface PropType {
    price: PriceInfo,
    from: string,
};

const PriceItem = ({price, from}: PropType) => {
    return (
        <div className="d-flex p-2 cursor-pointer" style={{backgroundColor:`${price.featured === true ? 'var(--bs-gray-100)' : 'transparent'}`}}>
            {
                from === "" ? (
                    null
                ) : (
                    <img className="review-brand me-2" src={require(`@images/brands/${from}.png`)} />
                )
            }
            <div className="d-flex flex-column flex-grow-1 me-4">
                {
                    from !== "" && (
                        <span className="small">{from}.com <span className="text-grey-900 fw-bold">{price.featured === true ? "Featured" : ""}</span></span>
                    )
                }
                <div className="d-flex">
                    <h6 className="flex-grow-1 mt-2">{price.title}</h6>
                    <div className="d-block">
                        <p className="text-grey-900 fs-5 fw-bold d-block text-end mb-0 pb-0">${price.price}</p>
                        <span className="text-end small mt-0">{`2 nights for $${price.priceTwoNights}`}</span>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column justify-content-end">
                <label className="btn btn-primary">Visit Site {`>`}</label>
            </div>
        </div>
    )
};
export default PriceItem;