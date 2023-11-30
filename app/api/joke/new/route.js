import Joke from "@models/joke";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, joke, tag } = await request.json();

    try {
        await connectToDB();
        const newJoke = new Joke({ creator: userId, joke, tag });

        await newJoke.save();
        return new Response(JSON.stringify(newJoke), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new joke", { status: 500 });
    }
}