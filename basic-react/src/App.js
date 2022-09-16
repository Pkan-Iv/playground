import './App.css';
import Board from './board';

function App() {
  const styles = {
    container: {
      backgroundColor: '#1B244A',
      display: 'flex',
      flexDirection: 'column',
      heigth: '100%',
      justifyContent: 'space-around',
      padding: 8,
      width: '100%',
    },

    root:{
      width: 500,
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      margin: '20px auto'
    },

    score_board: {
      display: 'flex',
      width: '100%',
    },
  }
  return (
    <div id='.root' style={ styles.root }>
      <div style={ styles.container }>
        <div id='head-board'>
          <h1> SCOREBOARD </h1>
        </div>
        <div style={ styles.score_board }>
          <Board team_name='ROCKETS' />
          <Board team_name='LAKERS' />
        </div>
      </div>
    </div>
  );
}

export default App;
