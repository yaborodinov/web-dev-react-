// import { goodsSlice } from "../store/goodsSlice";
import "./Goods.css";

function Goods(props) {
    return (
        <div className="goods__block">
            <img className="goods__image" src={props.image} alt="" />
            <h2 className="goods__title">{props.title}</h2>
            <p>Price <span>{props.cost}</span></p>
            <button className="add-to-cart" data-keys={props.articul }>Add to cart</button>
        </div>

    )
}


export default Goods;