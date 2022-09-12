import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Header: React.FC<Props> = (props) => {
  return (
    <div className=" mx-[10vw] flex h-header_h items-center justify-between">
      <span className="text-lg font-medium text-[#676767]">BePrayed</span>
      <span className="text-sm font-thin text-[#ACACAC]">Home</span>
    </div>
  );
};

export default Header;
