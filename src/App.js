import { useEffect } from 'react';
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore
} from "@100mslive/react-sdk";
import './App.css';
import SignIn from './SignIn';
import Conference from './Conference';
import Footer from './Footer';



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
      {isConnected ? (
        <>
          <Conference />
          <Footer />
        </>
      ):(
        <SignIn />
      )}
    </div>
  );

}

export default App;
