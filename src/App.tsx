import React from 'react';
import Card from "./components/card/card";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";


class App extends React.Component<any,any> {
    /*state={
     count: 0,
     visible: true
    };

        up = (type:string): void =>   {
        this.setState({count:this.state.count +1})
        }

        down = (): void => {
            this.setState({count:this.state.count -1})
        }

        update = (type:string): void => {
         switch (type) {
             case 'UP':
                 this.setState({count: this.state.count +1});
                 break;
             default:
                 this.setState({count: this.state.count -1});
                 break;
         }
        }
    render(){

    return(
        <div className="m-5">
            <button className="inline bg-green-600 px-5" onClick={() =>this.update('UP')}>+</button>
            <div className="inline mx-5 font-bold">{this.state.count}</div>
            <button className="inline bg-red-600 px-5" onClick={this.down}>-</button>


        </div>
      );
    }*/

    //git init
    //git add
    //git commit -m "msg"
    render() {
        return(
            <div >
                <Header/>

                <Footer/>
            </div>

        );
    }

}

export default App
