import React from 'react';
import {observer} from 'mobx-react';
import globalStore from '../../stores/GlobalStore';
import { TreeSelect,Layout ,Icon,Affix, Button } from 'antd';
const SHOW_PARENT = TreeSelect.SHOW_PARENT;
import 'antd/dist/antd.css';
import medicinal from '../../containers/moblie/medicinal.json';
/*import nodeEmail from 'nodemailer';*/
const { Header, Footer, Sider, Content } = Layout;
@observer
export default class M extends React.Component {
    constructor(props){
      super(props);
      this.state ={
          treeData:[]
      }
    }

    componentWillMount(){
        this.getTreeData();
    }

    getTreeData =()=>{
        let treeData = medicinal.treeData;
        treeData.forEach((A,B)=>{
            A.key = "0-" + B;
            A.value = "0-" + B;
            A.children.forEach((C,D)=>{
                C.key= "0-" + B +"-" +D ;
                C.value = "0-" + B  +"-"  + D;
                if(C.children){
                    C.children.forEach((E,F)=>{
                        E.key= "0-" + B  +"-"  + D +"-" + F;
                        E.value = "0-" + B  +"-"  + D +"-" + F;
                        if(E.children){
                            E.children.forEach((G,H)=>{
                                G.key=  "0-" + B  +"-"  + D +"-" + F +"-" + H;
                                G.value = "0-" + B  +"-"  + D +"-" + F +"-" + H;
                            })
                        }
                    })
                }

            })
        })
        this.setState({
            treeData
        })


    }

    onChange = (value) => {
        console.log('onChange ', value, arguments);
        this.setState({ value });
    }

    exit =() =>{
        window.location.hash ="#/login"

    }

    sendEmail=()=>{
        /*var transporter = nodeEmail.createTransport({
            service: 'qq',
            auth: {
                user: '527828938@qq.com',
                pass: 'ugxovfwhvxxxxxx' //授权码,通过QQ获取

            }
        });*/
    }
    render(){
        let treeData = this.state.treeData ;
        const tProps = {
            treeData,
            value: this.state.value,
            onChange: this.onChange,
            treeCheckable: true,
            showCheckedStrategy: SHOW_PARENT,
            searchPlaceholder: '请选择药物',
            style: {
                width: "95%",
            },
        };
        return (
          <div className="m-box">
              <div className="m-header">
                  <span style={{"float":"left","marginLeft":"10px"}} onClick={this.exit}><Icon type="menu-fold"/></span>
                  <Icon type="solution"/> 欢迎进入{this.props.params.pk}系统</div>
              <div className="m-content">
                    <TreeSelect {...tProps} />
              </div>
              <div style={{"margin":"0 auto","width":"80px"}}>
              <Affix offsetBottom={0} >
                  <Button type="primary">提交</Button>
              </Affix>
              </div>
          </div>
        )
    }
}