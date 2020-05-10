import React from 'react';
import './App.scss';
import Routing from './router-config/Routing';
import { Provider as ReduxProvider } from "react-redux";
import store from "./store/store";
import { Container } from "./assets/theme/full/background";
import SetTheme from "./AppTheme"

function App() {
  return (
    <ReduxProvider store={store}>
      <SetTheme>
        <Container>  
            <div className='grid-wrapper'>
              <Routing />    
            </div>          
        </Container>
      </SetTheme>
    </ReduxProvider>
  );
}

export default App;
