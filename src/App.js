import Home from "./Routes/home/home.component";
import { Routes,Route} from "react-router-dom";
import Navigation from "./Routes/navigation/navigation";
import Authentication from "./Routes/authentication/authentication";
import Shop from "./Routes/shop/shop.components";
import CheckOut from "./Routes/checkout/checkout";

const App=()=> {
 return (
  <Routes>
  <Route path="/" element={<Navigation />}>
    <Route index element={<Home />} />
    <Route path="shop/*" element={<Shop />} />
    <Route path="auth" element={<Authentication />} />
    <Route path="checkout" element={<CheckOut />} />
  </Route>
  
  </Routes>
 )
}
export default App;
