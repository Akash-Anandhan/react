import { use, useState } from "react";

function ListObject(){
    let [car , setcar] = useState([{Name : "mustang", Brand : "ford", Year: 2002
                                    }]);
    const [carName , setcarName] = useState("");
    const [carYear , setcaraYear] = useState(2025);
    const [carBrand , setcarBrand] = useState("");
    function handleAddCar(carName){
        if(carName !== "" && carBrand !== ""){
            const newCar = {
                Name : carName,
                Year : carYear,
                Brand : carBrand
            }
            setcar([...car, newCar]);
            setcarBrand("");
            setcarName("");
            setcaraYear(2025);
        }
        else{
            alert("please enter the car name and brand")
        }
        
        
        
    }
    function handlecaraYear(event){
        setcaraYear(event.target.value);

    }
    function handlecarBrand(event){
        setcarBrand(event.target.value);
    }
    function handlecarName(event){
        setcarName(event.target.value);
    }
    function handleRemoveCar(index){
        setcar(c => c.filter((_ , i) => i !== index))

    }
    return(
        <div>
            <h1>CARs AVAILABLE</h1>
            {car.map((item, index) => <li key={index} onClick={() => handleRemoveCar(index)}>
                {item.Year} {item.Brand} {item.Name}
            </li> )}
            <input type="number" value={carYear} placeholder="enter car year" onChange={handlecaraYear} /> <br />
            <input type="text" value={carBrand} placeholder="enter car brand" onChange={handlecarBrand} /> <br />
            <input type="text" value={carName} placeholder="enter car name" onChange={handlecarName} /> <br />
            <button onClick={()=>handleAddCar(carName)}>Add car</button>
        </div>
    );

}
export default ListObject;