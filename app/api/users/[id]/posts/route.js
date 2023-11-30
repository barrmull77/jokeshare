import Joke from "@models/joke";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const jokes = await Joke.find({ creator: params.id }).populate("creator")

        return new Response(JSON.stringify(jokes), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch jokes created by user", { status: 500 })
    }
} 