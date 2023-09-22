import { useState } from 'react';

export const SortingButton = () => {
  const [switchState, setSwitchState] = useState('recently');

  const handleOnChange = (buttonValue: string) => {
    setSwitchState(buttonValue);
  };

  return (
    <div>
      <div className="flex bg-gray-200 rounded-lg font-semibold text-sm">
        <button
          className={`py-[1px] px-0.5 border rounded-lg ${
            switchState === 'recently' ? activeText : optionalText
          }`}
          onClick={() => handleOnChange('recently')}
        >
          최신순
        </button>
        <button
          className={`py-[1px] px-0.5 border rounded-lg ${
            switchState === 'likes' ? activeText : optionalText
          }`}
          onClick={() => handleOnChange('likes')}
        >
          좋아요순
        </button>
      </div>
    </div>
  );
};

const activeText = 'bg-yellow-500 text-white';
const optionalText = 'text-gray-500';
