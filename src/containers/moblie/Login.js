import React from 'react';
import {observer} from 'mobx-react';
import { Form, Input, Button ,Icon} from 'antd';
import 'antd/dist/antd.css';
const createForm = Form.create;
const FormItem = Form.Item;
@observer
export default class Login extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            idCard:""
        }
    }
    handleSubmit = () =>{
        // this.props.history.push("/m/"+this.state.idCard )
        window.location.hash = "#/m/"+this.state.idCard
    }

    setInput =(e)=>{
        this.setState({
            idCard:e.target.value
        })
    }

    render(){
        return (
            <div className="login-container">
                <div className="login-mask"/>
                <Form className="login-content" layout="horizontal" onSubmit={this.handleSubmit}>
                    <h2>欢迎登陆系统</h2>
                    <FormItem label="" hasFeedback>
                        <Input  placeholder="身份证号" onChange={this.setInput} prefix={<Icon type="user" style={{ fontSize: 13 }} />} type="text"  />
                    </FormItem>
                    <FormItem>
                        <Button className="ant-col-24" type="primary" htmlType="submit">登录</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }

}