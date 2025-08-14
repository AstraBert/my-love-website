import { getLove } from "@/lib/love-sentences";

export async function GET() {
    return Response.json(
        {
            sentence: getLove()
        }
    )
}