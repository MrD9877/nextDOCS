export default async function NotFound({ params }) {
    const p = await params
    const { book } = p
    return (
        <>
            <div>
                {book[0] && <>book name: {book[0]}</>}
                <br />
                {book[1] && <><span>chapter name: {book[1]}</span></>}
                <br />
                {book[2] && <><span>page no: {book[2]}</span></>}
            </div>
        </>
    )

}
