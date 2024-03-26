'use client';

import React, { useEffect, useState } from "react";

/**
 * Function component for rendering content only on the client side.
 *
 * @param {Object} children - The React node to be rendered on the client side.
 * @return {ReactNode} The rendered content based on client availability.
 */
export default function ClientOnly({ children }: { children: React.ReactNode }) {

  const [isClient, setIsClient] = useState(false)
  useEffect(() => { setIsClient(true) }, [])

  return (<> {isClient ? <div>{children}</div> : null} </>);
};