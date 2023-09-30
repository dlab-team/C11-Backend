import express from "express";
import path from "path";
import cors from "cors";

export const load = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({
    extended: true
  }));
  app.use(cors());
};