import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface PageLayoutProps {
    children: React.ReactNode
}

const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <div className='min-h-screen w-full overflow-x-hidden flex flex-col'>
            <Header />
            <main className="flex-grow pt-16">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default PageLayout