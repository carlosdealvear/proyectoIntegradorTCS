import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import CardComponents from './components/CardComponents/CardComponents';
import Footer from './components/Footer/Footer'

function App() {
  return (
 
    <div id="wrapper">
      <Sidebar />
      
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          <Topbar />
          
          <div className="container-fluid">

            <h3 className="h3"> Top Tracks</h3>
              <CardComponents />
              
              <Footer />           

          </div>
        </div>

      </div>

    </div>
 
  );
}

export default App;
