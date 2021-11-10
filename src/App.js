import Layout from "./components/layout";

function App() {
  return (
    <main>
        <Layout>
          <div>
            <img source="https://avatars.githubusercontent.com/u/87498874?v=4" alt="User Pic"/>
            <h1>Lucas Ramos</h1> 
            <h3>Username: </h3>
            <span>devlucasramos</span>
            <div>
              <div>
              <h4>Followers</h4>
              <span>9999+</span>
              </div>
              <div>
              <h4>Starreds</h4>
              <span>9998</span>
              </div>
              <div>
              <h4>Followings</h4>
              <span>2</span>
              </div>
            </div>
          </div>
          <div>Repositories</div>
          <div>Starreds</div>
        </Layout>
    </main>
  );
}

export default App;