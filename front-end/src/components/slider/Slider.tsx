import { useState } from "react";

interface PropsSlider {
    min: number;
    max: number;
    step?: number;
    defaultMin: number;
    defaultMax: number;
    onChange: (values: number[]) => void;
  }

const Slider = (props: PropsSlider) => {

    const [values, setValues] = useState([props.defaultMin, props.defaultMax]);

  const handleChange = (index: number, value: number) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
    props.onChange(newValues);
  };

    return (
        <div className="relative flex items-center w-full">
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={values[0]}
        onChange={(e) => handleChange(0, Number(e.target.value))}
        className="absolute w-full opacity-0 cursor-pointer"
      />
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={values[1]}
        onChange={(e) => handleChange(1, Number(e.target.value))}
        className="absolute w-full opacity-0 cursor-pointer"
      />
      <div className="absolute w-full h-1 bg-gray-300 rounded-full"></div>
      <div
        className="absolute h-1 bg-black rounded-full"
        style={{ left: `${((values[0] - props.min) / (props.max - props.min)) * 100}%`, right: `${100 - ((values[1] - props.min) / (props.max - props.min)) * 100}%` }}
      ></div>
      <div className="absolute w-5 h-5 bg-black rounded-full -top-2" style={{ left: `${((values[0] - props.min) / (props.max - props.min)) * 100}%` }}></div>
      <div className="absolute w-5 h-5 bg-black rounded-full -top-2" style={{ left: `${((values[1] - props.min) / (props.max - props.min)) * 100}%` }}></div>
    </div>
    );
}
 
export default Slider;