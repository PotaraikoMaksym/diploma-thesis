import React from "react";
import "../src/style/App.css"
import Headline from "./components/UI/header/headline/Headline";
import WeekTimer from "./components/UI/header/weekTimer/WeekTimer";
import Popup from "./components/UI/popup/Popup";
import ScheduleTable from "./components/UI/table/ScheduleTable";

function App() {

    return (
        <div className="App">
            <Headline/>
            <WeekTimer/>
            <Popup/>
            <ScheduleTable/>
            <div></div>
        </div>
    );
}

export default App;
