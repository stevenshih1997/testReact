import React from 'react';

// ES6
const ConfirmBattle = (props) => { 
  return (props.isLoading === true
    ? <p> Is Loading... </p>
    : <p> CONFIRM BATTLE </p>
  );
};

export default ConfirmBattle;
