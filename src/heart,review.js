import React, { useState } from 'react';

function Heart() {
  const [clickCount, setClickCount] = useState(0);

  const Click = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <button
        onClick={Click}
        style={{
          backgroundColor: clickCount % 2 === 0 ? 'white' : 'red',
          cursor: 'pointer',
        }}
      >
        <img
          src="/images/heart.png"
          alt="하트"
        />
      </button>
      <p>좋아요 수: {clickCount}</p>
    </div>
  );
}

export default Heart;