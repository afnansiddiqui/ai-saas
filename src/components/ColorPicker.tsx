import React from 'react';
import { SketchPicker, ColorResult } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker: React.FC = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker 
        color={snap.color}
        disableAlpha
        onChange={(color: ColorResult) => state.color = color.hex}
      />
    </div>
  );
};

export default ColorPicker;
