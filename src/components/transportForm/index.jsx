import './style.css';

const TransportForm = () => {
    return (
        <div className="main">
            <div className="top">
                <h2>WHAT DO YOU WANT TO TRANSPORT?</h2>
                <select>
                    <option value="" disabled>WHAT DO YOU WANT TO TRANSPORT?</option>
                    <option value="1">FURNITURE</option>
                    <option value="2">CARS, MOTORCYCLES, PARTS</option>
                    <option value="3">NON-STANDARD LOADS</option>
                    <option value="4">PALLETS</option>
                    <option value="5">DONUTS</option>
                    <option value="6">ANIMALS</option>
                </select>

                <input type="text" className='sago' placeholder="name of the shipment e.g. sofa and two chairs..." />

                <div>
                    <input type="checkbox" />
                    <label>Any date - otherwise complete the fields below.</label>
                </div>

                <div className='formbox'>
                    <div className='left'>
                        <input type="date" placeholder="Shipping date" />
                        <input type="date" placeholder="Delivery date" />
                    </div>
                    <div className='right'>
                        <input type="text" placeholder="Shipping location" />
                        <input type="text" placeholder="Place of delivery" />
                    </div>
                </div>
            </div>

            <div className="bottom">
                <h2>DETAILED DESCRIPTION OF THE SHIPMENT</h2>
                <div className='inputs'>
                    <input type="number" placeholder="Length (cm)" />
                    <input type="number" placeholder="Width (cm)" />
                    <input type="number" placeholder="Height (cm)" />
                    <input type="number" placeholder="Weight (kg)" />
                    <input type="number" placeholder="Quantity" />
                    <input type="number" placeholder="Budget" />
                    <input type="text" placeholder="Additional notes" />
                </div>
                <button>Point to the photos</button>
            </div>
        </div>
    );
}

export default TransportForm;
