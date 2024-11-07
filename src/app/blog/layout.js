export const metadata = {
    title: {
        default: 'Blog-default',
        template: '%s | Template',
    },
    description: 'this is a blog',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
