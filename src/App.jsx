import './App.css';

function App() {
  const setBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <>
      <div id="contenor">
        <button id="red" onClick={() => setBackgroundColor('red')}>Red</button>
        <button id="white" onClick={() => setBackgroundColor('white')}>White</button>
        <button id="green" onClick={() => setBackgroundColor('green')}>Green</button>
        <button id="yellow" onClick={() => setBackgroundColor('yellow')}>Yellow</button>
        <button id="purple" onClick={() => setBackgroundColor('purple')}>Purple</button>
        <button id="blue" onClick={() => setBackgroundColor('blue')}>Blue</button>
        <button id="lightgray" onClick={() => setBackgroundColor('gray')}>Gray</button>
        <button id="black" onClick={() => setBackgroundColor('black')}>Black</button>
      </div>
    </>
  );
}

export default App;
