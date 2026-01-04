import ProductForm from './components/forms/ProductForm';
import './App.css';
import ProductList from './components/ui/ProductList';
import { useEffect, useState } from 'react';

function App() {
  const [currentView, setCurrentView] = useState('form')
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);
  
  return (
    <div className="app">
      <nav>
        <button onClick={() => setCurrentView('form')}>Create Product</button>
        <button onClick={() => setCurrentView('list')}>View Products</button>
      </nav>
      <main>        
      {currentView === 'form' && < ProductForm  currentView={currentView} setCurrentView={setCurrentView} />}
      {currentView === 'list' && < ProductList />}
      </main>
    </div>
  );
}

export default App;
