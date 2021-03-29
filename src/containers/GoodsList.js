import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGoods } from "../store/goodsSlice";
import Goods from "../components/Goods";

// get data from store
// list data



function GoodsList() {
    const goods = useSelector(selectGoods)
    const dispatch = useDispatch()
    return (
        <>
            <div className="goods__field">
                {goods.map(item => <Goods title={item.title} cost={item.cost} image={item.image} articul={item.articul} key={item.articul}/>)}
            </div>
        </>
    )
    
}


export default GoodsList;