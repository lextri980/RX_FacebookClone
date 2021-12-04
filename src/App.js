import './App.scss';
import { useRoutes } from 'react-router';
import routes from './routes/routes';
function App() {

  const content = useRoutes(routes());

  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
