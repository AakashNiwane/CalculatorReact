import './App.css';
import Header from './components/Header';

function App() {
  return (
      <div className ="calc-app">
        <div className="calc-wrapper">
          <Header />
        </div>
      </div>
    );
}

const wrapped = (
		<App />
);


export default wrapped;