import Layout from "../components/Layout";
import NewPost from "../pages/NewPost";
import Feed from "../pages/Feed";

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={ <Feed /> }/>
          <Route path="/new-post" element={ <NewPost /> }/>
        </Routes>
      </Layout>      
    </BrowserRouter>
  );
}

export default App;
