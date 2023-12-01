import Joke from "@models/joke";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const joke = await Joke.findById(params.id).populate("creator")
        if (!joke) return new Response("joke Not Found", { status: 404 });

        return new Response(JSON.stringify(joke), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    const { joke, tag } = await request.json();

    try {
        await connectToDB();

        // Find the existing joke by ID
        const existingJoke = await Joke.findById(params.id);

        if (!existingJoke) {
            return new Response("Joke not found", { status: 404 });
        }

        // Update the Joke with new data
        existingJoke.joke = joke;
        existingJoke.tag = tag;

        await existingJoke.save();

        return new Response("Successfully updated the Jokes", { status: 200 });
    } catch (error) {
        return new Response("Error Updating Joke", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();
    
        // Find the joke by ID and remove it
        await Joke.findByIdAndRemove(params.id);
        return new Response("Joke deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting Joke", { status: 500 });
    }
};