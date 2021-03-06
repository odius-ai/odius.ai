import './App.css';
import { Main } from "../Main"
import { Links } from "../Links"
import { Card } from "../Card"
import { Timeline } from "../Timeline"
import { How } from "../How"
import { Tokenomics } from "../Tokenomics"
import logo from "../images/logo.png"

export const App = () => {

    return (
        <div className="App">
            <div className="content">
                <Links />
                <Main />
                <div className="line_faded"> </div>
                    <How />
                    <div className="line_faded"> </div>
                    <Tokenomics />
                    <div className="line_faded"> </div>
                    <Timeline />
            </div>
        </div>
  );
}

