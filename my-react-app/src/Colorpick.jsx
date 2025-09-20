import { useState } from "react";

function Colorpick(){
    const [ color , setcolor] = useState("#ffffff");
    
    const  handlecolor = (event) => 
    {
        setcolor(event.target.value);
    }
    return(
        <div className="overall-container">
            <h1>Color Picker</h1>
            <div className="box" style={{backgroundColor : color}}>
                <p>{color}</p>
            </div>
            <p className="prompt">pick a color</p>
            <input className="colorp" type="color" value={color} onChange={handlecolor} />
        </div>
    );

}
export default Colorpick;