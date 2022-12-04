import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className=' max-w-screen-2xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
