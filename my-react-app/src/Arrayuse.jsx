import { useState } from "react";

function Arrayuse(){
    const [list , setlist] = useState(["apple","banana","carrot"]);
    
    function HandleAdd(){
        const newFood = document.getElementById("foodtype").value;
        document.getElementById("foodtype").value = "";
        setlist(l => ([...l, newFood]));


    }
    function HandleRemove(index){
        setlist(list.filter((element , i) => i !== index))

    }

    return( <div>
        <h1>Food items</h1>
        {list.map((item, index) => 
        <li key={index} onClick={() => HandleRemove(index)}>
            {item}
            </li> )}
        <input type="text" id="foodtype" placeholder="enter food name" />
        <button onClick={HandleAdd}>Add</button>
    </div> );

}
export default Arrayuse;