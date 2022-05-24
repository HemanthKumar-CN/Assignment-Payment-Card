import logo from './logo.svg';
import './App.css';
import Card from './component/card';
function App() {

  return (
    <div className="App">
      
      <Card date={"28/10/2022"} logo={"https://www.freeiconspng.com/uploads/amazon-icon--simple-iconset--dan-leech-1.png"} heading={"Amazon Gift"} subHeading={"Pay"} des={"Desktop-Mobile"} color={"#ff8321"}/>
      <br/>
      <br/>
      <Card date={"17 Sep 2020"} logo={"https://banner2.cleanpng.com/20171218/f41/apple-logo-png-5a37e212dfda18.3311147015136117949169.jpg"} heading={"Apple Gift"} subHeading={"Payment"} des={"MacOS-Mobile"} color={"whitesmoke"}/>
    </div>
  );
}

export default App;
