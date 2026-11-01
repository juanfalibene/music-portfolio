import { MyRoutes } from './router/MyRoutes';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className='layout'>
        <MyRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
