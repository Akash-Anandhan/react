function Student(props){
    return(
        <div className="Student">
            <p>Student : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>IsStudent : {props.isStudent ? "yes" : "no"}</p>
        </div>
    );    
}
Student.defaultProps= {
    name : "name",
    age : 0,
    isStudent : true,
};
export default Student;