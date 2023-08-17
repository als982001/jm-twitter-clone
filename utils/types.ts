import mongoose, { mongo } from "mongoose";

export interface ITwit {
  _id: mongoose.Types.ObjectId;
  nickname: string;
  authorId: mongoose.Types.ObjectId;
  authorIcon: string;
  email: string;
  twit: string;
  imageUrl: string;
  createdDate: string;
}

export interface IUser {
  _id: mongoose.Types.ObjectId;
  nickname: string;
  email: string;
  imageUrl: string;
  twits: mongoose.Types.ObjectId[];
}
