import React from 'react';
import Header from './components/Header/Header';
import CardComponents from './components/CardComponents/CardComponents';
import Footer from './components/Footer/Footer'

function App() {
  return (
 
    <div id="wrapper">
    
      
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          <Header />
          
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
