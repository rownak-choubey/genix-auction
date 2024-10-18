const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// User Schema
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/\S+@\S+\.\S+/, 'Please provide a valid email address.'],
        },
        password: {
            type: String,
            required: true,
        },
        auctions: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'AuctionItem',
            },
        ],
        bids: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Bid',
            },
        ],
    },
    {
        timestamps: true,
    }
);

// Password hashing middleware
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Method to compare password during login
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports =  mongoose.model('User', userSchema)