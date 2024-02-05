export async  function fetchAvailablePlaces(){
    let res = await fetch("http://localhost:3000/places");
    let jsonObj = await res.json();
    console.log(jsonObj)
    if (!res.ok) {
      throw  new Error("Failed to fetch places");
    }

    return jsonObj.places;
}

export async function exportUserPlaces(places){
    let obj = {
        places:places
    }
const response =  await fetch("http://localhost:3000/user-places",{
        method:"put",
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    });

const resData = await response.json();

if(!response.ok){
    throw new Error("Failed to update user data");
}
return resData.message;
}

export const  deletePlaces = ()=>{

} 


export async  function fetchUserPlaces(){
    let res = await fetch("http://localhost:3000/user-places");
    let jsonObj = await res.json();
    console.log(jsonObj)
    if (!res.ok) {
      throw  new Error("Failed to fetch user places");
    }

    return jsonObj.places;
}