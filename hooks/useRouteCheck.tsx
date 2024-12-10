"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function useRouteCheck(routeName: string) {
  const pathname = usePathname();
  const [isRoute, setIsRoute] = useState(false);

  useEffect(() => {
    setIsRoute(pathname === routeName);
  }, [pathname, routeName]);

  return isRoute;
}

export default useRouteCheck;
