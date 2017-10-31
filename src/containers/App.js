import React from 'react';
import { Link } from 'react-router';



//Redux去除了React的Props和State的差别,还有事件,统一都是Props,也就是Provider Store
//Store组件,给下层的App创建映射的属性
class App extends React.Component {

    componentWillMount = () => {

    }

    componentDidMount = () => {
        // let h = document.documentElement.clientHeight;
        /*let w = $(window).height();
        var dom = $(".content");
        dom.height( w - $(".top-nav").height() );
        $(window).resize(
            function(){
                let w = $(window).height();
                var dom = $(".content");
                dom.height( w - $(".top-nav").height() );
            }
        );*/
    }

    render() {
        return (
            <div>
               {this.props.children}
            </div>
        );
    }
}

export default App;
