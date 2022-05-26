import Layout from "../components/Layout";
import NewPost from "../pages/NewPost";

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/new-post" element={ <NewPost /> }/>
        </Routes>
      </Layout>      
    </BrowserRouter>
  );
}

export default App;
