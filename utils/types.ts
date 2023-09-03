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

export const defaultTwit: ITwit = {
  _id: "",
  id: "",
  nickname: "",
  authorId: "",
  authorIcon: "",
  email: "",
  twit: "",
  imageUrl: "",
  likes: [],
  comments: [],
  views: 0,
  createdDate: "",
};

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

export const defaultUser: IUser = {
  _id: "",
  nickname: "",
  email: "",
  imageUrl: "",
  twits: [],
  likes: [],
  password: "",
  comments: [],
};

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

export const defaultComment: IComment = {
  _id: "",
  authorId: "",
  nickname: "",
  email: "",
  authorImageUrl: "",
  twit: "",
  comment: "",
  likes: [],
  views: 0,
};

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

export interface IImageResponse {
  fields: {
    Policy: string;
    "X-Amz-Algorithm": string;
    "X-Amz-Credential": string;
    "X-Amz-Date": string;
    "X-Amz-Signature": string;
    bucket: string;
    key: string;
  };
  url: string;
}
