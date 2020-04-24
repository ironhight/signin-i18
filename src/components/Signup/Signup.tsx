import React, { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";

import "../../assets/styles/SignUp.css";

import { Row, Col } from "antd";


import { connect } from "react-redux";

import * as actions from "../../stores/Actions/SignInSignUp";
interface IProps extends WithTranslation {
  t: any;
  CallSignUptoStores:any
}
interface IState {
  email: string;
  password: string;
  fullname: string;
  repassword: string;
  toggle:boolean
}

interface IUser {
    email: string;
    password: string;
    fullname: string;
}
class Signup extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
      repassword: "",
      fullname: "",
      toggle:false
    };
  }
  SubmiSignUp = () => {
    var { email, password, fullname, repassword } = this.state;
     this.setState(preState=>({
         ...preState,
         toggle:true
     }))
     var NewUser:IUser={
        email,
        password,
        fullname
     }
    if(password===repassword && email && password){
        this.props.CallSignUptoStores(NewUser);
    }
  };
  OnChangeInput = (event: any) => {
    event.persist();
    this.setState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };
  render() {
    const { t } = this.props;
    var { email, password, fullname, repassword,toggle} = this.state;    
    return (
      <div className="layout__signUp">
        <Row className="layout__signUp-input">
          <Col span={24} className="layout__signUp-input-userpass">
            <input
              placeholder={t("signup_placeholder_fullName")}
              onChange={this.OnChangeInput}
              name="fullname"
              value={fullname}
            />
            <p>{toggle && !fullname   ?  t("error_blank_fullName")  :  ""}</p>
          </Col>
          <Col span={24} className="layout__signUp-input-userpass">
            <input
              placeholder={t("signup_placeholder_emall")}
              onChange={this.OnChangeInput}
              type="email"
              name="email"
              value={email}
              required
            />
             <p>{toggle && !email   ?  t("error_blank_email")  :  ""}</p>
          </Col>
          <Col span={24} className="layout__signUp-input-userpass">
            <input
              type="password"
              placeholder={t("signup_placeholder_password")}
              onChange={this.OnChangeInput}
              name="password"
              value={password}
            />
             <p>{toggle && !password   ?  t("error_blank_password")  :  ""}</p>
          </Col>
          <Col span={24} className="layout__signUp-input-userpass">
            <input
              type="password"
              placeholder={t("signup_placeholder_repassword")}
              onChange={this.OnChangeInput}
              name="repassword"
              value={repassword}
            />
            <p>{ toggle && repassword !== password   ?  t("error_verify_password")  :  ""}</p>
          </Col>
        </Row>
        <Row className="layout__signUp-button">
          <Col span={24} className="layout__signUp-button-login">
            <button onClick={() => this.SubmiSignUp()}>{t("Signup")}</button>
          </Col>
          <Col span={24} className="layout__signUp-button-p">
            <p>{t("or_login_faceLocal")}</p>
          </Col>
          <Col span={12} className="layout__signUp-button-facegoogle" xs={24} sm={24} md={12} lg={12} xl={12}>
            <button className="layout__signUp-button-facebook">
              {t("bnt_signup_facebook")}
            </button>
          </Col>
          <Col span={12} className="layout__signUp-button-facegoogle" xs={24} sm={24} md={12} lg={12} xl={12}>
            <button className="layout__signUp-button-google">
              {t("bnt_signup_google")}
            </button>
          </Col>
        </Row>
      </div>
    );
  }
}

  const mapDispatchToProps = (dispatch: any, props: any) => {
    return {
      CallSignUptoStores: (Newuser:any) => {
        dispatch(actions.CkeckSignUp(Newuser));
      }
    };
  };

  export default withTranslation("translation")(connect(null, mapDispatchToProps)(Signup));
