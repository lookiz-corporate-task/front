import Image from 'next/image';
import React from 'react';

interface BottomSheetProps {
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({ onClose, children, title }) => {
  return (
    <div
      className={`fixed z-50 w-[440px] h-[95%]  bottom-0 transform transition-transform duration-300 ease-in-out`}
    >
      <div className="flex flex-col max-w-2xl  h-full rounded-t-xl bg-white">
        <div className={`flex flex-row justify-between  h-[66px] border-b border-neutral-300 px-5`}>
          <h2 className={'font-md font-bold'}>{title}</h2>
          <button type="button" className={'w-6 h-6'} onClick={() => onClose()}>
            x
          </button>
        </div>
        <div className={`px-5 pt-8 pb-32 overflow-y-auto`}>{children}</div>
      </div>
      <footer
        className={`flex flex-col items-center z-20	absolute max-w-2xl left-0 bottom-0 right-0 px-5 pt-3 h-24 bg-white`}
      >
        <button
          type="button"
          className={'bottom-8'}
          onClick={() => {
            onClose();
          }}
        >
          <p className={'text-white w-[400px] bg-yellow-500 p-2 rounded-md'}>확인</p>
        </button>
      </footer>
    </div>
  );
};
