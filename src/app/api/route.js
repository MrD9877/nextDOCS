import { headers } from "next/headers"
const users = []


export async function GET(request) {
    const id = request.cookies.get("id")
    console.log(id)
    return new Response("<h1>hello world</h1>", {
        headers: {
            "content-Type": "text/html",
            "Set-Cookie": "id=98"
        }
    })
}
export async function POST(request) {
    const body = await request.json()
    const { username, password } = body
    const user = { username: username, password: password }
    users.push(user)
    console.log(users)
    return new Response(JSON.stringify(user), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201,
    })
}