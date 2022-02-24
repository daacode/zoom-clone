import { useEffect } from 'react';
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore
} from "@100mslive/react-sdk";
import './App.css';
import './SignIn';
import SignIn from './SignIn';

function App() {

  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  useEffect(() => {
      window.onunload = () => {
          if(isConnected) {
            hmsActions.leave();
          }
        }
      }, [hmsActions, isConnected]);

  return (
    <div className="App">
      <SignIn />
    </div>
  );

}

export default App;
