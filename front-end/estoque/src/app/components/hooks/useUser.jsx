import { useState, useEffect } from "react";

export function useUser() {
  const [user, setUser] = useState(null);

  async function fetchUser() {
    const response = await fetch("/api/profile", {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    if (!data.error) {
      setUser(data);
    } else {
      setUser(null);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, fetchUser };
}
