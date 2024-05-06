import React, { useState, useEffect } from 'react';

function ProgressBar({ id }) {
  const [percentage, setPercentage] = useState(
    localStorage.getItem(`progress_${id}`) || Math.floor(Math.random() * 100)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercentage(Math.floor(Math.random() * 100));
    }, 5 * 60 * 1000); // 5 minutos em milissegundos

    // Salvar o intervalId no localStorage para que você possa limpar o intervalo quando necessário
    localStorage.setItem(`intervalId_${id}`, intervalId);

    return () => {
      clearInterval(intervalId); // Limpar o intervalo quando o componente é desmontado
    };
  }, [id]);

  useEffect(() => {
    localStorage.setItem(`progress_${id}`, percentage);
  }, [percentage, id]);

  return (
    <div>
      <h1>Progresso: {percentage}%</h1>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
