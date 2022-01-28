import React, {Component} from "react";
import './css/Main.css';
import Header from "./Header";

import Dashboard from './Dashboard';
import App from "./App.jsx";


// class Mouse extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleMouseMove = this.handleMouseMove.bind(this);
//       this.state = { x: 0, y: 0 };
//     }
  
//     handleMouseMove(event) {
//       this.setState({
//         x: event.clientX,
//         y: event.clientY
//       });
//     }
  
//     render() {
//       return (
//         <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
//           <h1>Move the mouse around!</h1>
//           {this.props.render(this.state)}
//         </div>
//       );
//     }
// }

// function RenderText({mouse}) {
//     return(
//     <p>
//         The current mouse position is ({mouse.x}, {mouse.y})
//     </p>
//     )
// }
  

class Main extends Component{
    render(){
        return (
            <main id="mainContent">
                {/* <Header />
                <div className="main-content-title">
                    <h2>Dashboard</h2>
                </div> */}
                {/* <Mouse 
                render={mouse =><RenderText mouse={mouse}/>}
                /> */}
                
            </main>
        );
    }
}

export default Main;