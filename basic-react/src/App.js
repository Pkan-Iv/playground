import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="root">
      <h1> SCOREBOARD </h1>
      <div class="container">
        <div>
          <h3 id="home" class="teams">HOME</h3>
          <p id="home-score" class="scores"> 0 </p>
          <button class="add-pts"> +1 </button>
          <button class="add-pts"> +2 </button>
          <button class="add-pts"> +3 </button>
        </div>
        <div>
          <h3 id="guest" class="teams">GUEST</h3>
          <p id="guest-score" class="scores"> 0 </p>
          <button class="add-pts"> +1 </button>
          <button class="add-pts"> +2 </button>
          <button class="add-pts"> +3 </button>
        </div>
      </div>
    </div>
  );
}

export default App;
