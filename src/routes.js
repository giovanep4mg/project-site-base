import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home1 from './components/pages/Home/Home1';
import Produtos from './components/pages/Produtos/Produtos';


function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home1/>}></Route>
                <Route path="/home" element={<Home1/>}></Route>
                <Route path="/produtos" element={<Produtos/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;