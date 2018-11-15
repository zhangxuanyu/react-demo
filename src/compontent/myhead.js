import * as React from 'react';
import {Link} from 'react-router-dom'
import router from '../router';

class Myhead extends React.Component{
    constructor(props) {
		super(props);
		this.state = {
			goflg:0
		}
  	};
    gotoother(a,event){
        console.log(a)
        console.log(window.location.hash)
        // let hash = '#/' + a.key.split(",").join("/");
        this.state.goflg = a
        if(a==0){
            // this.props.history.push('/news')
            // window.location.hash = '#/news'

        }else{
            // this.props.history.push('/data')
            // window.location.hash = '#/data'
            // console.log(window.location.hash)
        }
        
    }
    render() {
        return (
            <div className="head">
                <div className="headmid">
               
                    <Link  className="left alllink" to='/'>news</Link>
                    <Link  className="right alllink" to='/data'>data</Link>
                
                    {/* <span className="left" onClick={this.gotoother.bind(this,1)}>新闻</span>
                    <span className="right" onClick={this.gotoother.bind(this,2)}>数据</span> */}
                </div>
            </div>
        )
    }
}

export default Myhead

