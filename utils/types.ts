import mongoose, { mongo } from "mongoose";

export interface ITwit {
  _id: mongoose.Types.ObjectId | string;
  id?: mongoose.Types.ObjectId | string;
  nickname: string;
  authorId: mongoose.Types.ObjectId | string;
  authorIcon: string;
  email: string;
  twit: string;
  imageUrl: string;
  likes: mongoose.Types.ObjectId[] | string[];
  comments: mongoose.Types.ObjectId[] | string[];
  views: number;
  createdDate: string;
}

export interface IUser {
  _id: mongoose.Types.ObjectId | string;
  nickname: string;
  email: string;
  imageUrl: string;
  twits: mongoose.Types.ObjectId[] | string[];
  likes: mongoose.Types.ObjectId[] | string[];
  password?: string;
  comments: mongoose.Types.ObjectId[] | string[];
}

export interface IComment {
  _id: mongoose.Types.ObjectId | string;
  authorId: mongoose.Types.ObjectId | string;
  nickname: string;
  email: string;
  authorImageUrl: string;
  twit: mongoose.Types.ObjectId | string;
  comment: string;
  likes: mongoose.Types.ObjectId[] | string[];
  views: number;
}

export interface ISession {
  user: {
    email: string;
    _id: string;
    nickname: string;
    twits: string[];
    imageUrl: string;
  };
  expires: string;
}
