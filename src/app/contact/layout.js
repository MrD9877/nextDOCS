import '../globals.css'
export const metadata = {
    title: 'Contact',
    description: 'this is contact page',
}

export default function RootLayout({ children }) {
    return (
        <>
            <nav >
                <div className="h-36 w-full bg-green-300">
                    this is nav bar
                </div>
            </nav>
            {children}
        </>
    )
}
