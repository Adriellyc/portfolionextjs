'use client';

import { useEffect, useState } from 'react';

export default function Conselho() {
  const [frase, setFrase] = useState('');

  useEffect(() => {
    fetch('/api/conselho')
      .then(res => res.json())
      .then(data => setFrase(data.frase));
  }, []);

  return (
    <div style={{ padding: '1rem', background: '#f0f0f0', borderRadius: '8px', marginTop: '1rem' }}>
      <strong>💬 Conselho do Dia:</strong>
      <p>{frase}</p>
    </div>
  );
}
