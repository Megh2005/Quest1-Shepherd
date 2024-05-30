import logo from "./logo.svg";
import "./App.css";
import Shepherd from "shepherd.js";

Shepherd.init(
  shp_181ee20c2695135a2303d8c4a22ac796e4a37f5a9a7f7bdb854fec0897c39c22
);

const journey = new Shepherd.Tour({
  id: "custom-123",
  defaultStepOptions: {
    cancelIcon: {
      enabled: true,
    },
    classes: "my-custom-class",
  },
  useModalOverlay: true,
});

journey.addStep({
  text: "Welcome to your new dashboard! Here you can see all the key sales and revenue data at a glance.",
  buttons: [
    {
      action() {
        return this.cancel();
      },
      secondary: true,
      text: "Exit",
    },
    {
      action() {
        return this.next();
      },
      text: "Complete",
    },
  ],
});
journey.start();

function App() {
  return <div className="App"></div>;
}

export default App;
