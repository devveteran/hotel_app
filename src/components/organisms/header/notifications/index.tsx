const Notifications = () => {
    return (
        <div className="card bg-transparent">
            <div className="card-header bg-transparent d-flex justify-content-between align-items-center border-bottom">
                <h6 className="m-0">Notifications <span className="badge bg-danger bg-opacity-10 text-danger ms-2">4 new</span></h6>
                <a className="small" href="#">Clear all</a>
            </div>

            <div className="card-body p-0">
                <ul className="list-group list-group-flush list-unstyled p-2">
                    <li>
                        <a href="#" className="list-group-item list-group-item-action rounded notif-unread border-0 mb-1 p-3">
                            <h6 className="mb-2">New! Booking flights from New York ✈️</h6>
                            <p className="mb-0 small">Find the flexible ticket on flights around the world. Start searching today</p>
                            <span>Wednesday</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="list-group-item list-group-item-action rounded border-0 mb-1 p-3">
                            <h6 className="mb-2">Sunshine saving are here 🌞 save 30% or more on a stay</h6>
                            <span>15 Nov 2022</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="card-footer bg-transparent text-center border-top">
                <a href="#" className="btn btn-sm btn-link mb-0 p-0">See all incoming activity</a>
            </div>
        </div>
    )
}
export default Notifications;