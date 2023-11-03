import "./ProductCard.css"
export const ItemListContainer = (props) =>{
    const{ producto, id ,precio,} = props
    return(

    
        <div className="card">
            <h1 >{producto}</h1>
            <p>N° de producto: {id}</p>
            <h2> Precio:{precio}</h2>
        </div>
    )
}
export default ItemListContainer;