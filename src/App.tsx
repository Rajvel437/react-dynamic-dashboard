
import './App.css'
import { Counter } from './components/Counter'
import { RegForm } from './components/RegForm'
import { TextEditor } from './components/TextEditor'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Container } from '@mui/material';


function App() {
  

  return (
    <>
      <Router>
        <div style={{ textAlign: "center", padding: "10px", background: "#f4f4f4" }}>
          <nav style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "10px", background: "#ddd" }}>
            <Link to="/" style={{ textDecoration: "none", color: "black", fontSize: "18px", fontWeight: "bold" }}>Counter</Link>
            <Link to="/form" style={{ textDecoration: "none", color: "black", fontSize: "18px", fontWeight: "bold" }}>User Form</Link>
            <Link to="/editor" style={{ textDecoration: "none", color: "black", fontSize: "18px", fontWeight: "bold" }}>Rich Text Editor</Link>
          </nav>
        </div>

        <Container>
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/form" element={<RegForm />} />
            <Route path="/editor" element={<TextEditor />} />
          </Routes>
        </Container>
      </Router>
    </>
  )
}

export default App
