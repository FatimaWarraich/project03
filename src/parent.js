import react from 'react';

function Parent(props){
    return(
    <div>
        <h1> He has two children. </h1>
           <h1> First Child's name is(props.child1)  </h1>
           <h1> 2nd child'sname is (props.child2</h1>
    </div>
    );
}
export default Parent;