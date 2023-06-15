import { BrowserRouter } from "react-router-dom";
import { Navigation } from "./router/Navigation";


const App = () => {
    return (
        <BrowserRouter>
            <Navigation/>       
        </BrowserRouter>
    )
}

export default App