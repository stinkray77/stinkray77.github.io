import React from "react";

type HomeLayoutProps = {
    children: React.ReactNode
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
    return <>
        <body className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
            {/* Header */}
            {children}
        </body >

    </>
}

export default HomeLayout