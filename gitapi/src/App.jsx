import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Repositories from './Repositories';

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Repositories />
      </QueryClientProvider>
    </>
  )
}

export default App
