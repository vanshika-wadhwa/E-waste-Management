import React from 'react'

const dumpZone = () => {
    const [data, setData] = useState('');
  
    // Using useEffect to call the API when the component mounts
    useEffect(() => {
      fetch('http://localhost:5000/api/message')
        .then((response) => response.json())
        .then((data) => setData(data.message))
        .catch((error) => console.error('Error fetching data:', error));
    }, []); // Empty array ensures the call happens once on mount
    
    return (
      <div>
        <h1>API Response: {data}</h1>
      </div>
    );
}

export default dumpZone
