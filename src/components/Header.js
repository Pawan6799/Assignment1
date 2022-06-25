import Header from './Header.css'
import { Link } from 'react-router-dom';
export default function Content({ setfilterState }) {
    function filters(e) {
        let { value } = e.target;
        setfilterState.setfilterState(value);
    }
    return (
        <div>
            <div className="flipkartheader">
                <div className="flipkartdiv">
                    <h1 className='h1'>Flipkart</h1>
                </div>
                <div className="flipkartsearch">
                    <input src="text" placeholder="Search for Products" className='flipkartsearchinput' onChange={filters} />
                </div>
                <div className="Searchicon">
                    <i class="fa fa-search"></i>
                </div>
                <div className="flipkartlogin">
                    <div className='flipkartitslogin'>Login</div>
                </div>
                {/* <div>Become a Seller</div> */}
                <div className="flipkartcart">
                    <div className="flipkartimage">
                        <img src="./image/download.png" className='intsimg' />
                    </div>
                    <div className="flipkartcartdiv">
                        <Link to="/addtocart"> <div className='intscartdiv' >Cart</div></Link>
                        <div className='intscountdiv'>{setfilterState.cart.length}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}