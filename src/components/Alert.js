import React from "react";

const Alert = (props) => {

  return (
    <div className="flex justify-center pt-2 h-0 fixed z-50">
        { props.alert.typ && props.alert.msg &&
    <div class={`alert w-{10} h-10 flex text-xs alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
    <strong >{props.alert.typ==='danger' ?'Error' : props.alert.typ.toUpperCase()} : </strong> 
    <span className="mx-2">{props.alert.msg}</span>
          
    </div>}
    </div>
  );
};

export default Alert;
