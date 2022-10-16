import React, {useState} from 'react';
export default function Tab(props){

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