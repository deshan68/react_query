import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Home";

function App() {
  const clinet = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        // refetchInterval: 2000,
      },
    },
  });
  return (
    <QueryClientProvider client={clinet}>
      <div className="App">
        <Home />
      </div>
    </QueryClientProvider>
  );
}

export default App;
