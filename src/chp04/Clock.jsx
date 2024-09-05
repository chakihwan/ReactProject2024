import React from "react";

function Clock(props){
    return(
        <div>
            <h1>안녕, 리엑트!</h1>
            <div className={'aa'}>현재 시간 : {new Date().toLocaleTimeString()}</div>
        </div>
    );
}

export default Clock;