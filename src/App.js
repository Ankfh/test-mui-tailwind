import Button from '@mui/material/Button';
import { MyComponent } from './muiStylee/Button';
function App() {
  return (
    <div className="App">
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <MyComponent variant="contained">Contained</MyComponent>
    </div>
  );
}

export default App;
