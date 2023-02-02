import { useEffect } from "react";

function NotFoundPage() {
  useEffect(() => {
    window?.location?.assign("/");
  }, []);

  return null;
}

export default NotFoundPage;
