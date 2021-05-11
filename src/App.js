import React from "react";
import Company from "./Company";

//позже надо добавить в скобки ниже companyId
function App() {
    return(<div className='container-fluid'>
        <Company companyId={3}/>
    </div>)
}

export default App;
