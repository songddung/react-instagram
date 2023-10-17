import Center from "./Center";
import Mainbox from "./Mainbox";
import Left from "./left";
import Right from "./right";

function Base(){
    return(
<div id='start'>
        <Left />
        <div>
          <Center />
          <Mainbox />
        </div>
        <Right></Right>
      </div>)}

      export default Base