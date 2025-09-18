function List(){
    const fruits = [{id:1, name :"apple", calories: 107},
    {id:2,name :"banana", calories: 16}, 
    {id:3,name :"grapes", calories: 142}]

    const listitems = fruits.map(fruits => <li key= {fruits.id}>
        {fruits.name}
        :
        <b>{fruits.calories}</b>
        </li> )

    return( <ol>{listitems}</ol> );
}
export default List