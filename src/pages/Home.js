import {useEffect, useState} from 'react'

import getHomeProducts from './../scripts/services/getHomeProducts'

import './../styles/components/card.css'
import Card from './../styles/components/Card'

export default function Home(){
    const [result, setResult] = useState([]);

    useEffect(()=>{
        const fetch = async () =>{
            const data = await getHomeProducts()
            setResult(data);
        }
        fetch()
    }, []
    )

    const listProducts = result.map((product) =>
        <Card name={product.name} description={product.description} price/>
    )

    return(
        <div>
            {listProducts}
        </div>
    );
}