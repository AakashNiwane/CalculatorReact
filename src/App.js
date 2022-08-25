import './App.css';


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
	<Provider store={store}>
		<App />
	</Provider>
);


export default wrapped;