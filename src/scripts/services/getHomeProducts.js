export default async function getHomeProducts(){

    try{
        const response = await fetch('http://localhost:8080/product/');
        console.log(response);

        if(!response.ok){
            throw new Error('Network is not ok');
        }

        const result = await response.json();

        return result;
    }catch(error){
        console.error(error);
    }

}