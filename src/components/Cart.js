//import {Link} from "react-router-dom"
import './Cart.css'
import Object from './Object'
export default function Login({ filterState }) {
    let filtersData = Object.filter(ele => ele.type.includes(filterState.filterState.toUpperCase()));
    return (
        <>

            <div className='allflipkarts'>
                {
                    filtersData.length == 0 ?
                        Object.map((ele) => {
                            return (
                                <div className="flipkartallcarts">
                                    <div className="Flipkartcartimg">
                                        <img src={ele.image} className="flipkartimagejpg" />
                                    </div>
                                    <div className="remainpart">
                                        <div className="tshirt">{ele.type}</div>
                                        <div className="Rs">Price : RS {ele.price}</div>
                                        {/* <div className="cartsqunatiy">Quantity : {ele.quantity}</div> */}

                                    </div>
                                    <div className="flipkartbutton">
                                        <button className="itsfilpkartbutton" onClick={()=>filterState.Adds(ele)}>Add To Cart</button>
                                    </div>
                                </div>
                            )
                        }) 
                        : filtersData.map((ele) => {
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
                                        <button className="itsfilpkartbutton" onClick={()=>filterState.Adds(ele)}>Add To Cart</button>
                                    </div>
                                </div>
                            )

                        })
                }
            </div>
        </>

    )
}