import React from 'react';
import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';

function Results({results}) {
  return (
  <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:flex flex-wrap justify-center '>
      {results.map(result => (
         <Thumbnail key={result.id} result={result}/>
      ))}
  </FlipMove>
  );
}

export default Results;
