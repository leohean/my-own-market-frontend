import {useEffect, useState} from 'react'

import getHomeProducts from '../../scripts/services/getHomeProducts'

import Card from '../../styles/components/card/Card'

import './home.css'

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
        <Card name={product.name} description={product.description}/>
    )

    return(
        <div class="container">
            <div class="title">
                <div class="main">My Own Market</div>
                <div class="sub">"Tornando o pãozinho de cada dia grandioso"</div>
            </div>
            {listProducts}
        </div>
    );
}