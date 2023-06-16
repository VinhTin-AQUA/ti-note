import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";

function App() {
  return (
    <div>
      <Routes>
        {publicRoutes.map((route, index) => {
          const path = route.path;
          const Layout = route.layout;
          const Element = route.component;

          return (
            <Route
              key={index}
              path={path}
              element={
                <Layout>
                  <Element />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
