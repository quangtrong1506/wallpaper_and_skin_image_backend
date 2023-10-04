import mongoose from 'mongoose';
import { default as mongoosePaginate } from 'mongoose-paginate';

const worksSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        description: String,
        type: {
            type: Number,
        },
        thumbnail: {
            type: String,
        },
        media_id: {
            type: String,
        },
        site_id: {
            type: String,
        },
        albums: {
            type: String,
        },
        images: {
            type: Array,
            default: [],
        },
        category: {
            type: Array,
            default: [],
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
worksSchema.plugin(mongoosePaginate);
export default mongoose.model('works', worksSchema, 'works');
