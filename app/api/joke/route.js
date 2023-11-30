import Joke from "@models/joke";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const jokes = await Joke.find({}).populate('creator')

        return new Response(JSON.stringify(jokes), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all jokes", { status: 500 })
    }
} 