import { createPortal } from 'react-dom';
import './App.css';
import CalculatorButtons from './Components/CalculatorButtons';
import CalculatorInput from './Components/CalculatorInput';
import Header from './Components/Header';

function App() {
  return (
    <main className='max-w-xl text-white transition-all'>
      <Header />
      <CalculatorInput />
      <CalculatorButtons />
      {createPortal(
        <div className='right-0 bottom-0 left-0 fixed bg-[--footer-bg] p-4 text-center'>
          <p className='text-[--input-text] text-sm'>Made with ❤️ by Aditya Singh</p>
        </div>,
        document.body
      )}
    </main>
  );
}

export default App;