import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h1 class="text-9xl font-bold underline">
        Hello world!
      </h1>

		<div class="collapse">
  <input type="checkbox" class="peer" />
  <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
    Click me to show/hide content
  </div>
  <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
    <p>hello</p>
  </div>
</div>

    </div>
  );
}

export default App;
