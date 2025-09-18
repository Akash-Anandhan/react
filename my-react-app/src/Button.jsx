function Button(){
    let count = 0;

    const handler = (name) => {
        if(count<3){
            count++;
            console.log(`${name} you clicked me ${count} times`);
        }
        else{
            console.log(`${name} stop clicking the button`);
        }

    }

    return(
        <>
        <button onClick={() => handler("akash")}>click me</button>
        </>
    );
    

}
export default Button