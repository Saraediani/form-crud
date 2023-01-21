import mongoose from 'mongoose';

const usersShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        // required: true
    },
    phone: {
        type: String,
        // required: true
    },
    job: {
        type: String,
        // required: true
    },
    company: {
        type: String,
        // required: true
    },
    age: {
        type: String,
        // required: true
    },
    city: {
        type: String,
        // required: true
    },
    comingFrom: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now(),
    },
});

const users = mongoose.model('users',usersShema)
export default users;