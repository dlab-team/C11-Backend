import express from "express";
import path from "path";

export const load = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};
