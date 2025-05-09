import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GameContextProvider } from './GameContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GameContextProvider>
    <App />
  </GameContextProvider>
)
