import { BrowserRouter } from "react-router-dom";
import { Navigation } from "./router/Navigation";
import { supabase } from "./supabase";


const App = () => {
    console.log(supabase);

    return (
        <BrowserRouter>
            <Navigation/>
        </BrowserRouter>
    )
}

export default App