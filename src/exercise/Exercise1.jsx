import React from 'react';

function Exercise1() {
  return (
    <div>
      <Job salary={90000} position={"full stack"} company={"google"}/>
      <Job salary={80000} position={"full stack"} company={"twitter"}/>
      <Job salary={10000} position={"front end "} company={"google"}/>
    </div>
  );
}


function Job(props){
    return(
        <div>
            {props.salary}
            {props.position}
            {props.company}
        </div>
    )
}



export default Exercise1;
