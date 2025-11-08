import React from 'react'
import { Header } from './Header'
import { Footer } from 'react-day-picker'

interface childNodes {
    children: React.ReactNode
}
const PageLayout = ({ children }: childNodes) => {
    return (
        <div className='w-full overflow-x-hidden flex items-start flex-col gap-5'>
            <Header />
            <div className="pt-10">{children}</div>
            <Footer />
        </div>
    )
}

export default PageLayout