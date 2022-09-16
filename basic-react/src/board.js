import './App.css';

export default function Board({ team_name = '' }) {
  const styles = {
    add_pts: {
      width: '45px',
      height: '45px',
      border: '1px solid #EEEEEE',
      backgroundColor: '#1B244A',
      color: '#EEEEEE',
      borderRadius: '5px',
      borderStyle: 'dashed',
      fontFamily: 'Orbitron, sans-serif'
    },

    scores: {
      width: 150,
      height: 150,
      backgroundColor: 'black',
      border: 'none',
      borderRadius: 5,
      color: '#F94F6D',
      fontFamily: 'Orbitron, sans-serif',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 90,
      textAlign: 'center',
    }
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h3 id="home" style={{
        fontWeight: 700,
        fontSize: 45
      }}>{ team_name }</h3>
      <p id="home-score" style={ styles.scores }> 0 </p>
      <div style={{ height: '100%' }}>
        <button style={ styles.add_pts }> +1 </button>
        <button style={ styles.add_pts }> +2 </button>
        <button style={ styles.add_pts }> +3 </button>
      </div>
    </div>
  );
}
