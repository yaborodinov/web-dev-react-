import { createSlice } from "@reduxjs/toolkit"

import goodsArr from "../data/goods.json"


export const goodsSlice = createSlice({
    name: "goods",
    initialState: {
        goods:goodsArr
    },
    reducer:{}
})

export const { } = goodsSlice.actions;
export const selectGoods = state => state.goods.goods;
export default goodsSlice.reducer;