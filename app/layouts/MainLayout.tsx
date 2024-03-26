import React from "react"
import { usePathname } from "next/navigation"
import TopNav from "./includes/TopNav"

/**
 * Main layout component for the application.
 *
 * @param {Object} children - The children components to be rendered within the layout.
 * @return {ReactNode} The JSX elements for the MainLayout component.
 */
export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    return (
      	<>
			<TopNav />
			<div className={`flex justify-between mx-auto w-full lg:px-2.5 px-0 ${pathname == '/' ? 'max-w-[1140px]' : ''}`}>
				{children}
			</div>
      	</>
    )
}