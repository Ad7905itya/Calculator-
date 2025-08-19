import React, { useEffect } from 'react';
import Buttons from './Buttons';
import { useInputs } from '../hook/useInputs';

const CalculatorButtons = () => {
  const [rawValue, setRawValue] = useInputs();

  function EqualTO() {
    try {
      const sanitizedValue = rawValue.replace(/\b0+(?=\d)/g, '');
      const result = eval(sanitizedValue);
      setRawValue(result.toString());
    } catch (err) {
      alert('Invalid Input!!!');
    }
  }

  function setSymbolInput(symbol) {
    const lastChar = rawValue.at(-1);
    if (!['+', '-', '*', '/', '.'].includes(lastChar)) {
      setRawValue(prev => prev + symbol);
    }
  }

  function setInput(digit) {
    setRawValue(prev => prev + digit);
  }

  function handleKeyPress(e) {
    const key = e.key;
    if (!isNaN(key)) return setInput(key);
    if (["+", "-", "*", "/"].includes(key)) return setSymbolInput(key);
    if (key === ".") return setSymbolInput(".");
    if (key === "Enter") return EqualTO();
    if (key === "Backspace") return setRawValue(prev => prev.slice(0, -1));
    if (key === "Escape") return setRawValue("");
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [rawValue]);

  return (
    <div className='bg-[--screen-bg] mt-5 p-10 rounded-xl w-full h-full'>
      <div className='gap-4 grid grid-cols-4 w-full'>
        {["7", "8", "9"].map(num => (
          <Buttons key={num} onclick={() => setInput(num)}>{num}</Buttons>
        ))}
        <Buttons onclick={() => setRawValue(prev => prev.slice(0, -1))} type="del">DEL</Buttons>

        {["4", "5", "6"].map(num => (
          <Buttons key={num} onclick={() => setInput(num)}>{num}</Buttons>
        ))}
        <Buttons onclick={() => setSymbolInput('+')}>+</Buttons>

        {["1", "2", "3"].map(num => (
          <Buttons key={num} onclick={() => setInput(num)}>{num}</Buttons>
        ))}
        <Buttons onclick={() => setSymbolInput('-')}>-</Buttons>

        <Buttons onclick={() => setSymbolInput('.')}>.</Buttons>
        <Buttons onclick={() => setInput('0')}>0</Buttons>
        <Buttons onclick={() => setSymbolInput('/')}>/</Buttons>
        <Buttons onclick={() => setSymbolInput('*')}>&times;</Buttons>

        <Buttons onclick={() => setRawValue('')} type="reset" style={{ gridColumn: 'span 2' }}>
          RESET
        </Buttons>
        <Buttons onclick={EqualTO} type="equal" style={{ gridColumn: 'span 2' }}>
          =
        </Buttons>
      </div>
    </div>
  );
};

export default CalculatorButtons;
