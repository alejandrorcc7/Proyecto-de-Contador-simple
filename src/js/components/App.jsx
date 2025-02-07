import React from "react";

const App = () => {
	const [seconds, setSeconds] = useState(0);
  
	useEffect(() => {
	  const interval = setInterval(() => {
		setSeconds((prev) => prev + 1);
	  }, 1000);
  
	  return () => clearInterval(interval); // Limpiar intervalo al desmontar
	}, []);
  
	return <ContadordeSegundos seconds={seconds} />;
  };
  
  export default App;