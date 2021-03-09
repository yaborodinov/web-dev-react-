

function Goods(props) {
    return (
        <div className="goods-block">
            <h1>{props.title }</h1>
            <p>{props.cost}</p>
            <img src={props.image} alt={props.title}/>
        </div>
    )
}
export default Goods;