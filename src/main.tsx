
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { HomeContextProvider } from './hooks/home/HomeContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <HomeContextProvider>
  <App />
  </HomeContextProvider>
      
  </BrowserRouter>
)
