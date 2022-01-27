import React, {Component} from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Main from "./Main";

class FlexDashboard extends Component {
    render(){
        return(
            <div>
                {/* <Header />
                <Sidebar /> */}
                <Main />
            </div>
        );
    }
}

export default FlexDashboard;