import '@/assets/styles/globals.css'

export const metadata ={

    title:'Bat dong san',
    description:'Giac mo nha cua',
    keywords:'Mua, thue , nha cua'
}

const MainLayout = ({children}) => {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <div>{children}</div>
            </body>
            
        </html>
    )
}

export default MainLayout
