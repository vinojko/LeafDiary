import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import EntryDetailPage from "./pages/EntryDetailPage";
import RootLayout from "./pages/Root";
import Login from "./components/LoginRegister/Login";
import Register from "./components/LoginRegister/Register";
import { AuthUserProvider } from "./firebase/auth";
import { EntriesProvider } from "./components/context/EntriesContext";
import "./variables.css";

function App() {
  return (
    <EntriesProvider>
      <AuthUserProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<RootLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/entry-detail" element={<EntryDetailPage />} />
            </Route>
          </Routes>
        </Router>
      </AuthUserProvider>
    </EntriesProvider>
  );
}

export default App;
