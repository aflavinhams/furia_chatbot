import Chatbot from "./paginas/chatbot";
import "./App.css";
import furiaLogo from './imagens/png_furia.png';

function App() {
  return (
    <div className="chatbot-container">
  <div className="chatbot-header">Chatbot FURIA 
    <img src={furiaLogo} alt="FURIA Logo" className="furia-logo" />
    </div>
  <div className="chatbot-messages">
    {<Chatbot></Chatbot>}
  </div>
</div>
  );
}

export default App;
