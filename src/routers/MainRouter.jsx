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
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/game-list" element={<GameList />} />
        <Route path="/create_flappy" element={<FlappyGame />} />
        <Route path="/finish_game" element={<ShareGame />} />
      </Route>
    </Route>
  )
);

const MainRouter = () => <RouterProvider router={router} />;

export default MainRouter;
