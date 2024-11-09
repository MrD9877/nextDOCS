import { redirect } from "next/navigation"

export async function GET(request, { params }) {
    const { id } = await params
    console.log(id)
    if (id > 9) redirect("/api")
    return new Response(id)
}