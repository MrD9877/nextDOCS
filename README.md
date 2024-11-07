# Error in next/bable
go to .eslint file and change
```
{
  "extends": [
    "next/babel",
    "next/core-web-vitals"
  ]
}
```
# Special files in next
**page.js**/
**layout.js**/
**not-found.js**/
**template.js**/
**loading.js**/
**error.js**/
**delault.js**/

# Routing
## Dynamic Routing
use [anyname] for dynamic routing/
params to ref route/
```
export default async function Reviews({ params }) {
    const par = await params
    const { blogerID, reviews } = par
    }
```
## Catch all segments
use [...anyname] to catch all segments
```
//remember p is a object containing all catched segments destructure before use.
export default async function NotFound({ params }) {
    const p = await params
    const { book } = p
    }
```
## Remove file from route or private file
if you do not want file to route yet use ***_filename***

## Group routes
To group a similar intent routes use **(filename)**

# Layout
```
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```
## Tailwind in layout 
```
 import '../globals.css'
 ```

# Meta data
metadata is read from outer to inner and inner metadata rewright previous metadata.
```
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
```
## Dynamic metadata
```
export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = (await params).id
 
  // fetch data
  const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product.title,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}
 
export default function Page({ params, searchParams }) {}
```
## Titile Object
absolute if do not want to change/
template if editing with nested title/
default in case no title in nexted routes/
```
export const metadata = {
  title: {
    default: '...',
    template: '%s | anyTitle',
    absolute: '...',
  },
}
```
# Navigate
next use Link like react but use href tag
```
import Link from "next/link"
```
```
<Link href="/about">About US<Link/>
```
**replace** replace history of tab
```
<Link href="/about" replace>About US<Link/>

```

## Styling link tag 
pathname return path we are nevigated to ex : "/about"/
```
'use client'
import { usePathname } from 'next/navigation'
const pathname = usePathname()
 ```

### UseRouter
The useRouter hook allows you to programmatically change.
```
 
import { useRouter } from 'next/navigation'
 
const router = useRouter()
 
router.push('/dashboard')
//default scroll to top of routed page.
router.push('/dashboard',{ scroll: false })
router.replace('/dashboard')
```
# Templates
Nameing file templates.js insted of layout.js rerender all components and state in templets usefull when to rerender in specific senarious/
**template.js**/
use both layout and template to rerender specific states/

# Loading
loading.js wrap whole file in suspence component

# Error
error.js shows error for given component and keep our whole site from crashing
```
'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}
```
# Parllel routing
@filename
to access component destructure them from props/
```
export default function Layout({ children, team, analytics }) {
  return (
    <>
      {children}
      {team}
      {analytics}
    </>
  )
}
```
**pro**
as per there conterparts components they benifit from next custom error,loading files where loading and error problems do not stop whole page./

# Unmached Routes
use dalfault.js

# Conditional Routes
You can use Parallel Routes to conditionally render routes based on certain conditions, such as user role. For example, to render a different dashboard page for the /admin or /user roles:
```
import { checkUserRole } from '@/lib/auth'
 
export default function Layout({ user, admin }) {
  const role = checkUserRole()
  return <>{role === 'admin' ? admin : user}</>
}
```
# Intercepting Routeing
use (.)**nameOfFile**
(.) to match segments on the same level
(..) to match segments one level above
(..)(..) to match segments two levels above
(...) to match segments from the root app directory