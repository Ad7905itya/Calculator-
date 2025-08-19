import { useInputs } from "../hook/useInputs";

const CalculatorInput = () => {
  const [value] = useInputs();

  const displayValue = /^[0-9,.]+$/.test(value)
    ? Number(value.replace(/,/g, '')).toLocaleString("en-IN")
    : value;

  return (
    <div className='bg-[--input-bg] mt-5 rounded-xl w-full min-h-5'>
      <input
        className='bg-transparent px-6 py-6 outline-none w-full font-[900] text-[--input-text] text-4xl text-right'
        type="text"
        name="text"
        id="input"
        value={displayValue}
        readOnly
      />
    </div>
  );
};

export default CalculatorInput;