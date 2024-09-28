import { Navigation, Question, Timer } from "./components";

function App() {
  return (
    <div className="flex w-screen h-screen">
      <div className="w-2/5  hidden md:block">
        <img src="./quiz.png" alt="Quiz" className="w-full h-full" />
      </div>

      <div className="flex flex-col p-10 md:p-2 w-3/5 md:w-full">
        <div className="flex items-center justify-between w-full">
          <h1 className="font-bold text-3xl text-blue-500">Quiz App</h1>
          <Timer />
        </div>
        <Question className="my-16" />
        <Navigation />
      </div>
    </div>
  );
}

export default App;
