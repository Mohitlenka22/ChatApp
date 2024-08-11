import mongoose, { Schema, model } from 'mongoose';

const requestSchema = new Schema(
  {
    status: {
      type: String,
      default: 'pending',
      enum: ['accepted', 'rejected', 'pending'],
    },
    sender: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
    },
    receiver: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

export const Request = mongoose.models.Request || model('Request', requestSchema);
