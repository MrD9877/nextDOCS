export default function RootLayout({ children, feacherone, feachertwo, feacherthree }) {
    return (
        <>
            {children}
            <div className="flex">
                <div className="mx-5">
                    <div className="my-5">
                        {feacherone}
                    </div>
                    {feachertwo}
                </div>
                <div className="my-5">
                    {feacherthree}
                </div>
            </div>
        </>
    )
}