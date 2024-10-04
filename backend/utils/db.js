import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const a = await mongoose.connect(process.env.MONGO_URL);
        console.log('mongodb connected successfully');
        // console.log(a);
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;