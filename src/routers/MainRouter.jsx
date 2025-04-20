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
import Profile from "../app/Profile";
import Library from "../app/Labrary";
import GameProgramming from "../categories/GameProgramming";
import LogicalThinking from "../categories/LogicalThinking";
import Robotics from "../categories/Robotics";
import DigitalArt from "../categories/DigitalArt";
import VideoPlaer from "../app/Video"
import Scratch from "../app/Scratch";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/video/:category/:id" element={<VideoPlaer/>} />
        {/* <Route path="/dashboard" element={<HomePage />} /> */}
        <Route path="/dashboard" element={<Library />} />
        <Route path="/game-list" element={<GameList />} />
        <Route path="/labs" element={<LabsPage />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/create_flappy" element={<FlappyGame />} />
        <Route path="/finish_game" element={<ShareGame />} />

        <Route path="/game-programming" element={<GameProgramming />} />
        <Route path="/logical-thinking" element={<LogicalThinking />} />
        <Route path="/robotics" element={<Robotics />} />
        <Route  path="/scratch" element={<Scratch/>}/>
        <Route path="/digital-art" element={<DigitalArt />} />
      </Route>
    </Route>
  )
);

const MainRouter = () => <RouterProvider router={router} />;

export default MainRouter;
