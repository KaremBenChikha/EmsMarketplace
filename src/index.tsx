import App from './App';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { useROS, ROS } from "react-ros";
import ToggleConnect from "./components/ToggleConnect";
import SimulatorProMax from "./components/SimulatorProMax";
import 'nprogress/nprogress.css';
import { SidebarProvider } from './contexts/SidebarContext';


ReactDOM.render(
  <HelmetProvider>
    
      <BrowserRouter>
        <App />
      </BrowserRouter>
  
  </HelmetProvider>,
  /*   <div>
      <ROS>
        <ToggleConnect/>
      </ROS>
    </div>, */
  document.getElementById('root')
);

serviceWorker.unregister();
