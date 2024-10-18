const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const bcrypt = require('bcryptjs');

// Auction Item Schema
const auctionItemSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        startingBid: {
            type: Number,
            required: true,
            min: 0,
        },
        currentHighestBid: {
            type: Number,
            default: 0,
            min: 0,
        },
        bidHistory: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Bid',
            },
        ],
        endDate: {
            type: Date,
            required: true,
            validate: [date => date > Date.now(), 'End date must be in the future.'],
        },
    },
    {
        timestamps: true,
    }
);

auctionItemSchema.plugin(AutoIncrement, { inc_field: 'auctionId' });


module.exports = mongoose.model('AuctionItem', auctionItemSchema)
    