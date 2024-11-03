import './card.css'

import noPhoto from './../../assets/images/no-photo.jpg'
export default function Card(props){
    return(
        <div>
            <div className='card'>
                <img src={noPhoto}></img>
                    {props.name}
                    <br></br>
                    {props.description}
            </div>
        </div>
    );
}