import React, { forwardRef } from 'react';

const ComponentToPrint = forwardRef(({ dataPrint }, ref) => {

  console.log({ dataPrint });

  return (
    <div ref={ref}>
      <h1>Content Print Here</h1>
    </div>
  )
});

export { ComponentToPrint };