
import './App.css';

import USER from './Components/user';
import LISTRENDER from './Components/listRender';
import MYCOUNT from './Mycount';

//let isloggedIn =true;


function App() {
  return (
    <div><h1>In App Component</h1>
    {/* { isloggedIn ?( <MYBUTTON/>) :(<USER/>)} */}
    
    <USER/>
    <LISTRENDER/>
   <MYCOUNT/>
    
    </div>
  );
}

export default App;
