import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/home";
import GamePage from "@/pages/game";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "game",
        element: <GamePage />,
      },
      {
        path: "play",
        element: <div className="text-white p-20">Play Page - Coming Soon</div>,
      },
      {
        path: "blogs",
        element: (
          <div className="text-white p-20">Blogs Page - Coming Soon</div>
        ),
      },
      {
        path: "post",
        element: <div className="text-white p-20">Post on X - Coming Soon</div>,
      },
    ],
  },
]);
