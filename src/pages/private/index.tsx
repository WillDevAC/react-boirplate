import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom'; //hooks


const PrivatePage: React.FC = () => {

  const [ isValid, setIsValid ] = useState(`Teste`);

  useEffect(() => {
    console.log(`Alert`)
  }, [])

  return (
    <>
        <h1>{isValid}</h1>
        <button onClick={() => setIsValid(`mudou`)}>Incrementar</button>
    </>
  );
}

export default PrivatePage;