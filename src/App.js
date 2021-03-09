import Header from "./Header/Header.js"
import Goods from "./Goods.js"
import  './App.css';


const headerData = {
  site_name: "my text site name",
  nav: [
    {
      "link": "nav1",
      "text": "my link"
    },
    {
      "link": "nav2",
      "text": "my link2"
    },
    {
      "link": "nav3",
      "text": "my link3"
    },
  ]
}


const goods = [
  { "title": "apple Iphone 10", "cost": 330, "image": "https://softmag.com.ua/image/cache/catalog/products/2018/05/021823/silikonoviy-chehol-apple-silicone-case-white-dlya-iphone-x-10-kopiya-700x1.jpeg" },
  { "title": "apple Iphone 6", "cost": 130, "image": "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP706/SP706-iphone_6_plus-mul.png" }
]



function App() {
  return (
    <div className="App">
      <Header
        data = {headerData}
      />
      {
        goods.map(item => { return <Goods key={item.title} title={item.title} cost={item.cost} image={item.image} /> })
      }
      
    </div>
  );
}

export default App;
