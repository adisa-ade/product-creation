import ProductForm from './components/forms/ProductForm';
import './App.css';
import ProductList from './components/ui/ProductList';
import { useState } from 'react';

function App() {
  const [currentView, setCurrentView] = useState('form')
  return (
    <div className="app">
      <nav>
        <button onClick={() => setCurrentView('form')}>Create Product</button>
        <button onClick={() => setCurrentView('list')}>View Products</button>
      </nav>
      <main>        
      {currentView === 'form' && < ProductForm />}
      {currentView === 'list' && < ProductList />}
      </main>
    </div>
  );
}

export default App;
