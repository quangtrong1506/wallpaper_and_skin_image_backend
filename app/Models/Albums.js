import mongoose from 'mongoose';
import { default as mongoosePaginate } from 'mongoose-paginate';

const albumsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        description: String,
        type: {
            type: Number,
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
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    }
);
albumsSchema.plugin(mongoosePaginate);
export default mongoose.model('albums', albumsSchema, 'albums');
