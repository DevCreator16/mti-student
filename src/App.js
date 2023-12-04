import LOG from "../src/compnent/LOGIN";
import { BrowserRouter, Route, Router,Routes } from "react-router-dom";
import Forget from "../src/compnent/Forget";
import Courses from "../src/compnent/Courses";
import RESULT from "../src/compnent/Result";
import Chat from "../src/compnent/Chat";
import PROFILE from "../src/compnent/Profile";
import MYCOURSE from "../src/compnent/Mycourese";
import Das from "../src/compnent/Dash";
import EXPLORE from "../src/compnent/Explore";
import B from "../src/compnent/Tatoos";
import P from "../src/compnent/Blog";
import G from "../src/compnent/Bodypricing";
import K from "../src/compnent/About";
import C from "../src/compnent/Location";
import Weeks from "../src/compnent/Coursedetail";
import BOOTCAMP from "../src/compnent/Bootcamp";
import OPT from "../src/compnent/Otp";
import Newpassword from "./compnent/Newpassword";
import Home from "../src/compnent/Home";
import Inbox from "./compnent/Inbox";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LOG />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/forget/otp" element={<OPT />} />
          <Route path="/forget/otp/newpassword" element={<Newpassword />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/inbox" element={<Inbox/>}/>
          <Route path="/dash" element={<Das />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/profile" element={<PROFILE />} />
          <Route path="/mycourses" element={<MYCOURSE />} />
          <Route path="/:username/explore" element={<EXPLORE />} />
          <Route path="/:username/tatoos" element={<B />} />
          <Route path="/:username/bodypricing" element={<G />} />
          <Route path="/:username/about" element={<K />} />
          <Route path="/:username/blog" element={<P />} />
          <Route path="/location" element={<C />} />
          <Route path="/coursedetail/:courseId" element={<Weeks />} />
          <Route path="/result" element={<RESULT />} />
          {/* <Route path="/chat" element={<Chat />} /> */}
          <Route path="/bootcamp" element={<BOOTCAMP />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
