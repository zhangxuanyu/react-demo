import * as React from 'react';
import {Link} from 'react-router-dom'
import { inject, observer } from 'mobx-react';


class News1 extends React.Component {
    somefn(aa,event){
        this.props.pfn(aa)
    }
    render(){
        let name = this.props.name
        return(
            <div>
                <p>NEWS1{name}{this.props.title1}</p>
                <p onClick={this.somefn.bind(this,'wangwu')}>click!!!</p>
            </div>
        )
    }
}

@inject('counte')
@observer
class News extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
            data:[],
            aac:'zhangsan'
		}
      };
    show(event){
        alert(this.props.counte.count)
    };
    componentDidMount() { //类似mounted
        console.log(this.props.counte.count)
		let that = this;
        fetch('http://service.dappdata.io/eos/rank', {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded' // 指定提交方式为表单提交
                  }),
                body: JSON.stringify({ "page":1,"timestamp":1534953600,"order_by":'total',"category":"total"}) // 这里是请求对象
            })
            .then((res)=>{
                console.log(res)
                return res.json()
            })
            .then((res)=>{
                console.log(res)
                res.msg.info.forEach(e => {
                });
                that.setState({
                        data:res.msg.info
                    })
                console.log(that.state.data)
            })
    };
    fn(name){
        this.setState({
            aac:name
        })
    }
    render(){
        // var counte = counte;
        let list = this.state.data.map((item,i)=>
            <p key={i}  onClick={this.show.bind(this)}>{item.dapp_id}:{item.title}</p>
        )
      
       
        

        return (
            <div>
                {1>0?
                (
                <div>
                    <p>
                        Counter:
                        <span> {this.props.counte.count}</span>
                    </p>
                    <p>
                        <button onClick={() => this.props.counte.increment()}> + </button>
                        <button onClick={() => this.props.counte.decrement()}> - </button>
                    </p>
                    <News1 name={this.state.aac} pfn={this.fn.bind(this)}></News1>



                    <p><Link to='/' className="alllink">data</Link></p>
                    {list}
                </div>
                ):
                (<p>111111111</p>)
                }
            </div>
        )
    }
}

export default News;