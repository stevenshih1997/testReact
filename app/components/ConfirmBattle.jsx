import React from 'react';

const ConfirmBattle = (props) => {
  return (props.isLoading === true
    ? <p> Is Loading... </p>
    : <p> CONFIRM BATTLE </p>
  );
};

export default ConfirmBattle;
