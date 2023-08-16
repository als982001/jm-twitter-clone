import mongoose from "mongoose";

export interface ITwit {
  _id: mongoose.Types.ObjectId;
  author: string;
  email: string;
  twit: string;
  imageUrl: string;
  createdDate: string;
}
