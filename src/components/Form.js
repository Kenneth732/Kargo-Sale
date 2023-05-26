import React, { useEffect, useState } from 'react';
import './Form.css';

function Form() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch('/machines')
      .then((res) => res.json())
      .then((itemArrays) => {
        setItems(itemArrays);
      });
  }, []);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseClick = () => {
    setSelectedItem(null);
  };

  return (
    <div className="App">
      {items.map((item) => (
        <div key={item.id} className="animal-card">
          <div className="card" onClick={() => handleCardClick(item)}>
            <div className="image-card">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="text-card">
              <h2 className="animal-name">{item.name}</h2>
              <p>Price: {item.price}</p>
              <p className="animal-description">{item.description}</p>
            </div>
          </div>
        </div>
      ))}

      {selectedItem && (
        <div className="overlay" onClick={handleCloseClick}>
          <div className="zoomed-card">
            <img src={selectedItem.image} alt="animal" />
            <div className="text-card">
              <h2 className="animal-name">{selectedItem.name}</h2>
              <p className="animal-description">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;