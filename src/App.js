import React, {useCallback, useMemo, useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

// Screen
import Screen1 from "./Screen/Screen1";
import Screen2 from "./Screen/Screen2";
import Screen3 from "./Screen/Screen3";

function App() {
  const [screenApp, _setScreenApp] = useState(1);

  const ComponentScreenApp = useMemo(() => {
    let Component = <React.Fragment />
    switch (screenApp) {
      case 1:
        Component = Screen1;
        break;
      // case 2:
      //   Component = Screen2;
      //   break;
      case 2:
        Component = Screen3;
        break;
      default:
        break;
    }
    return Component;
  }, [screenApp]);

  const setScreenApp = useCallback((value) => _setScreenApp(value), [screenApp])

  return(<ComponentScreenApp nexScreen={setScreenApp} />);
}

export default App;
