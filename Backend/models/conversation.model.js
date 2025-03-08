import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants: [ 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            
        },
    ],
    caseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Case",
        required: false,
    },
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: [],
        },
    ],
    },
    {timestamps: true}
);

export default mongoose.model("Conversation", conversationSchema);