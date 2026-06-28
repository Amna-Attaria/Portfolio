import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AppRoutes from './routes/AppRoutes'
import CustomCursor from './components/common/CustomCursor'
import ScrollProgress from './components/common/ScrollProgress'

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <ScrollProgress />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: 'rgba(15,23,42,0.95)',
            color: '#f1f5f9',
            border: '1px solid rgba(59,130,246,0.3)',
            backdropFilter: 'blur(20px)',
            borderRadius: '12px',
            fontFamily: 'Inter, sans-serif',
          },
          success: {
            iconTheme: { primary: '#3B82F6', secondary: '#fff' },
          },
          error: {
            iconTheme: { primary: '#ef4444', secondary: '#fff' },
          },
        }}
      />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
