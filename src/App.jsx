import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Category from './pages/Category';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* More routes later like:
                <Route path="/category/:categoryId" element={<Category />} />
            */}
            <Route path="/category/:categoryName" element={<Category />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
