import mongoose from 'mongoose';
import { default as mongoosePaginate } from 'mongoose-paginate';

const categorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        description: String,
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
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    }
);
categorySchema.plugin(mongoosePaginate);
export default mongoose.model('category', categorySchema, 'category');
