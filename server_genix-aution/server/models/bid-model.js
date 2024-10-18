const mongoose = require('mongoose');

// Bid Schema
const bidSchema = new mongoose.Schema(
    {
        auctionItem: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'AuctionItem',
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        bidAmount: {
            type: Number,
            required: true,
            min: [1, 'Bid must be greater than zero.'],
        },
    },
    {
        timestamps: true,
    }
);

module.exports =  mongoose.model('Bid', bidSchema)
