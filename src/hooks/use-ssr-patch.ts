import { useState, useEffect } from "react";

// There is an issue with Gatsby & React where React has trouble noticing changes that occur
// on the client side (such as media queries) after the Gatsby server-side render. This hook
// implements the patch suggested here: https://github.com/gatsbyjs/gatsby/issues/14601
function useSsrPatch() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return { ssrPatchKey: isClient ? "client-render" : "server-render" };
}

export default useSsrPatch;
