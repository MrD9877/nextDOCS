export const metadata = {
    title: "review",
    description: 'this is a blog',
}
export default function layout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}