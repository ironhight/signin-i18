import React, { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { Row, Col } from "antd";

import "../../assets/styles/Login.css";

import { connect } from "react-redux";

import * as actions from "../../stores/Actions/SignInSignUp";

interface IProps extends WithTranslation {
  t: any;
  CallLogintoStores:any
}
interface IState{
   username:string,
   password:string,
   flaglogin:boolean
}
class Login extends Component<IProps,IState> {
  // SubmitLogin = ()=>{
  //   this.props.CallLogin();
  // }

  constructor(props:IProps) {
     super(props);
     this.state={
        username:'',
        password:'',
        flaglogin:false
     }
  }
  OnChangeInputUserName= (e:React.ChangeEvent<HTMLInputElement>)=>{
      this.setState({
        username : e.target.value
      });
  }
  OnChangeInputPassword=(e:any)=>{
    this.setState({
        password : e.target.value
    });
  }
  SubmitLogin=()=>{
     var {username,password} = this.state;
      this.setState({
         flaglogin:true
      })
      this.props.CallLogintoStores(username,password)
  }
  render() {
    const { t } = this.props;
    var {username,password,flaglogin} = this.state;
    return (
      <div className="layout__login">
        <Row className="layout__login-input">
          <Col span={24} className="layout__login-input-userpass">
            <input 
            placeholder={t("input_username_placeholder")}
            name="username"
            value={username} 
            onChange={this.OnChangeInputUserName}/>
             <p>{(flaglogin && !username)   ?  t("error_blank_email")  :  ""}</p>
          </Col>
         
          <Col span={24} className="layout__login-input-userpass">
            <input 
             placeholder={t("input_password_placeholder")} 
             name="password"
             value={password} 
             onChange={this.OnChangeInputPassword}/>
             <p>{ (flaglogin && !password)   ?  t("error_blank_password")  :  ""}</p>
          </Col>
          
        </Row>
        <Row className="layout__login-button">
          <Col span={24} className="layout__login-button-login">
            <button 
            onClick={()=>this.SubmitLogin()}
            >{t("login")}</button>
          </Col>
          <Col span={24} className="layout__login-button-p">
            <p>{t("or_login_faceLocal")}</p>
          </Col>
          <Col span={12} className="layout__login-button-facegoogle" xs={24} sm={24} md={12} lg={12} xl={12}>
            <button className="layout__login-button-facebook">
              {t("bnt_login_facebook")}
            </button>
          </Col>
          <Col className="layout__login-button-facegoogle" xs={24} sm={24} md={12} lg={12} xl={12}>
            <button className="layout__login-button-google">
              {t("bnt_login_google")}
            </button>
          </Col>
          <Col  span={24} className="layout__login-button-forgotpassword" >
            <Link
              to="/forgot-password"
              className="layout__login-button-forgotpassword-link"
            >
              {t("forgot_password")}
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
    return {
      ToggleHeader: state.ToggleHeader
    };
  };
  const mapDispatchToProps = (dispatch: any, props: any) => {
    return {
      CallLogintoStores: (username:string, password:string) => {
        dispatch(actions.CkeckLogin(username,password));
      }
    };
  };

  export default withTranslation("translation")(connect(mapStateToProps, mapDispatchToProps)(Login));

/*
layout__login
   -> layout__login-input
      -> layout__login-input-userpass
   -> layout__login-button
      -> layout__login-button-login
      -> layout__login-button-p
      -> layout__login-button-facegoogle
      -> layout__login-button-forgotpassword


 */
