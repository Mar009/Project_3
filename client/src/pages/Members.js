import React from "react"
import { useStoreContext } from '../utils/GlobalStore';

function Members(){
    const [state] = useStoreContext();
    const {nickname} = state;
    return <div className="container">
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <h2>Welcome {nickname}</h2>
      </div>
    </div>
  </div>
}

export default Members;