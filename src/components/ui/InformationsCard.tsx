import React from 'react';

function InformationsCard({children, title}: { children: React.ReactNode; title: string }) {
  return (
    <div>
      <div className={'flex items-center justify-between pb-[12px]'}>
        <span className={'font-medium text-[1.9rem] text-[#2a2a2a]'}>{title}</span>
        <span className={'font-semibold text-primary cursor-pointer text-[1.5rem]'}>Edit</span>
      </div>
      <div
        className={"grid grid-cols-2 text-[1.4rem] p-[1.6rem] bg-[#f9f9f9] border border-[#f9f9f9] rounded-[8px] font-medium text-[#2a2a2a] gap-y-[15px]"}>
        {children}
      </div>
    </div>
  );
}

export default InformationsCard;