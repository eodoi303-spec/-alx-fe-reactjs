function MainContent() {
  return (
    <main
      style={{
        padding: '20px',
        backgroundColor: '#eef2f3',
        minHeight: '300px'
      }}
    >
      <h2 style={{ color: '#333' }}>Top Cities I Love</h2>

      <ul style={{ listStyleType: 'square', color: '#444' }}>
        <li>Accra</li>
        <li>Paris</li>
        <li>Tokyo</li>
        <li>New York</li>
      </ul>
    </main>
  );
}

export default MainContent;
