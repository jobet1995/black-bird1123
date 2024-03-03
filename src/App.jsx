import { useState, useEffect } from "react";
import { supabase } from "./utils/supabase";
import Auth from "./components/Auth";

function App() {
  const [, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.session();
    setUser(session ?? null);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, sessionFromOnChange) => {
        const currentUser = sessionFromOnChange ?? null;
        setUser(currentUser);
      }
    );
    
    return () => {
      authListener.unsubscribe();
    };
  }, []);

  return (
    <div className="min-w-full min-h-screen flex items-center justify-center bg-gray-200">
      {! ? <Auth/> : <Home={}/>}
    </div>
  );
}

export default App;