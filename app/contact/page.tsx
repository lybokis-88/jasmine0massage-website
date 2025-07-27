export default function Contact() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>연락처</h1>
        <div style={{
          backgroundColor: '#f5f5f5',
          padding: '20px',
          borderRadius: '8px'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>자스민 마사지</h2>
          <p style={{ marginBottom: '0.5rem' }}>전화: +60 16-931 8439</p>
          <p>위치: Warisan Square 2F, 2-13, Kota Kinabalu</p>
        </div>
      </div>
    </div>
  )
}
