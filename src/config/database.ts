import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:32768/node-app", {
            useNewUrlParser: true
        });
        console.log(">>> Database connected");
    } catch {
        console.log("Error");
    }
}
