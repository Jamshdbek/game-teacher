import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./MainLayout";
import HomePage from "../pages/home/HomePage";
import GameList from "../gameList/GameList";
import FlappyGame from "../flappy/FlappyGame";
import ShareGame from "../pages/game/ShareGame";
import LabsPage from "../pages/labs/LabsPage";
import WelcomePage from "../app/WelcomePage";
import LoginPage from "../auth/LoginPage";
import Register from "../auth/RegisterPage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<HomePage />} />

        <Route path="/game-list" element={<GameList />} />
        <Route path="/labs" element={<LabsPage />} />

        <Route path="/create_flappy" element={<FlappyGame />} />
        <Route path="/finish_game" element={<ShareGame />} />
      </Route>
    </Route>
  )
);

const MainRouter = () => <RouterProvider router={router} />;

export default MainRouter;
