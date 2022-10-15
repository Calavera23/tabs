import React, {useState} from 'react';
import './App.css';

function Tab(props){

  const [highlightStyle,setHightlightStyle]=useState({opacity:0, left:0});

  function moveHighlight(e){
    console.log(e.nativeEvent.screenX);
    setHightlightStyle({
      left:e.nativeEvent.layerX-150, 
    });

    
  }

  function hideHighlight(e){
    setHightlightStyle({
      opacity:0,
    })
  }
  return(          <div className="tab" onMouseOut={hideHighlight} onMouseMove={moveHighlight}>
  <div className="highlight" style={highlightStyle}/>
  <a>{props.children}</a>
  
</div>)
}

function App() {
  
  return (
    <div className="app">
      <div className="browser">
        <div className="tabs">
          <Tab><a>Home</a></Tab>
          <Tab><a>About</a></Tab>
          <Tab><a>Featured</a></Tab>

          
        </div>

        <div className="viewport">Pages Go Here</div>
      </div>
    </div>
  );
}

export default App;
