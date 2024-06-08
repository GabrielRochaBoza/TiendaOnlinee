import agent from "../../app/API/agent";
import LoadingComponent from "../../app/layout/loadingcomponent";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";


export default function Catalog (){
    const [products, setProducts] = useState<Product[]>([]);
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
      agent.Catalog.list().then(products =>setProducts(products))
      .catch(error=>console.log(error))
      .finally(()=>setLoading(false))
    },[])

    if (Loading) return <LoadingComponent/>
  
    return(
        <>
            <ProductList products={products}/>
        </>
    )
}