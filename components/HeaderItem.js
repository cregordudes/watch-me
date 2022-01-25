import React from 'react';

function HeaderItem({Icon, title}) {
  return (
  <div className='flex flex-col items-center font-medium cursor-pointer group
  w-12 sm:w-20 hover:text-white'>
      <Icon className="h-6 mb-1 group-hover:animate-bounce md:h-7 lg:h-8"/>
      <p className='opacity-0 group-hover:opacity-100 tracking-widest'>{title}</p>
  </div>
  );
}

export default HeaderItem;
