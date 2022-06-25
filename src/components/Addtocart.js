import './Cart.css'
import Object from './Object';
export default function Addtocart({cart}){
    return(
        <>
         <div className='allflipkarts'>
                {
                    cart.cart.length == 0 ?
                        // <div className='empty'>
                            <h1>This Cart Is Empty</h1>
                        // </div>
                        : cart.cart.map((ele) => {
                            return (
                                <div className="flipkartallcarts">
                                    <div className="Flipkartcartimg">
                                        <img src={ele.image} className="flipkartimagejpg" />
                                    </div>
                                    <div className="remainpart">
                                        <div className="tshirt">{ele.type}</div>
                                        <div className="Rs">Price : RS {ele.price}</div>
                                        <div className="cartsqunatiy">Quantity : {ele.quantity}</div>

                                    </div>
                                    <div className="flipkartbutton">
                                        <button className="itsfilpkartbutton" onClick={()=>cart.Adds(ele)}>Add To Cart</button>
                                    </div>
                                </div>
                            )

                        })
                }
            </div>
        </>

    );
}