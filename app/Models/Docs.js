import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        url: {
            type: String,
            required: true,
        },

        created_at: {
            type: Date,
            required: false,
            timestamps: true,
        },
        updated_at: {
            type: Date,
            required: false,
            timestamps: true,
        },
        deleted_at: {
            type: Date,
            required: false,
        },
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);

export default mongoose.model("Images", userSchema);
