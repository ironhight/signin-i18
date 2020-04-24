import React, { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import i18n from "../../i18n";
// import { Link, Route, Switch } from "react-router-dom";
import { Link} from "react-router-dom";

import { Row, Col,Menu, Dropdown } from "antd";
import { DownOutlined } from '@ant-design/icons';

import img_signup from "../../assets/image/signup_bg.png";
import img_logo from "../../assets/image/logo.png";
import iconVietNamese from "../../assets/image/icon_vietnamese.png"
import iconEnglish from "../../assets/image/icon_english.png"

import "../../assets/styles/LoginRegister.css";

import Login from "../Login/Login";
import SignUp from "../Signup/Signup";


interface IProps extends WithTranslation {
  t: any;
}
interface IState {
  flagLogin: boolean;
}



class LoginRegister extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      flagLogin: true
    };
  }
  
  // Nên làm như vậy hay không
  SetFlagLogin = () => {
    this.setState({
      flagLogin: !this.state.flagLogin
    });
  };
  // handleClick(lang: any) {
  //   i18n.changeLanguage(lang);
  // } 
  handleMenuClick = (e:any) => {
    i18n.changeLanguage(e.key);    
  };
 
  render() {
    const { t } = this.props;
    var { flagLogin } = this.state;
    const menu = (
      <Menu onClick={(e)=>this.handleMenuClick(e)}  className="layout__loginSignup-right-languages-dropdown-menu"> 
        <Menu.Item key="en">
          <img src={iconEnglish} alt="EN" className="layout__loginSignup-right-languages-dropdown--img"/>
          <p className="layout__loginSignup-right-languages-dropdown--p">English</p>
        </Menu.Item>
        <Menu.Item key="vi">
           <img src={iconVietNamese} alt="VN" className="layout__loginSignup-right-languages-dropdown--img"/>
            <p className="layout__loginSignup-right-languages-dropdown--p">Vietnamese</p>
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Row className="layout__loginSignup">
          <Col  className="layout__loginSignup-left " xs={24} sm={24} md={24} lg={24} xl={16} >
            <img src={img_signup} alt="Img_Login_Register" />
            <p>"A beautiful life begins with a beautiful mind"</p>
          </Col>
          <Col span={8} className="layout__loginSignup-right" xs={24} sm={24} md={24} lg={24} xl={8}>
               <Col span={24} className="layout__loginSignup-right-languages">
                  <Dropdown overlay={menu} className="layout__loginSignup-right-languages--dropdown" >
                        <Link to="/#" onClick={e => e.preventDefault()} className="layout__loginSignup-right-languages-dropdown-link">
                        {t("languages")}<DownOutlined />
                        </Link>
                  </Dropdown>
               </Col>

            {/* ROW INPUT USERNAME PASSWORD */}
            <Row>
              <Col span={24} className="layout__loginSignup_right-img">
                <img src={img_logo} alt="logo" />
              </Col>
              <Col span={24} className="layout__loginSignup_right-title">
              <h1>{flagLogin ? t("title_login") : t("title_signup")}</h1>
              </Col>
              <Col span={24} className="layout__loginSignup_right-title">
                <p>
                {flagLogin ? t("note_title_login") : t("note_title_signup")}
                  <span className="layout__loginSignup_right-title-link">
                    {!flagLogin ? (
                      <Link to="/login" onClick={() => this.SetFlagLogin()}>
                        {t("login")}
                      </Link>
                    ) : (
                      <Link to="/singup" onClick={() => this.SetFlagLogin()}>
                        {t("signup")}
                      </Link>
                    )}
                  </span>
                </p>
              </Col>
            <Row className="layout_login_SignUp_flap">
                 {
                   flagLogin  ? <Login/>  : <SignUp/>
                 } 
            </Row>
            </Row>
            {/* END INPUT USERNAME PASSWORD */}
            {/* ROW BUTTON */}
            {/* <Row>
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/singup" component={SignUp} />
              </Switch>
            </Row> */}
             {/* END BUTTON */}

             {/* ROW  POLICY TERMS */}
            <Row>
              <Col span={24} className="layout__loginSignup-right-policyTerms">
                <p>
                  {t("policy_terms1")}{" "}
                  <span>
                     <Link
                      to="/#"
                      className="layout__loginSignup-right-policyTerms-link"
                     >
                      {t("policy_terms2")}
                    </Link>
                  </span>{" "}
                  &{" "}
                  <span>
                    <Link
                      to="/#"
                      className="layout__loginSignup-right-policyTerms-link"
                    >
                      {t("policy_terms3")}
                    </Link>
                  </span>
                </p>
              </Col>
            </Row>
             {/* END  POLICY TERMS */}

            {/* ROW COPY RIGHT */}
            <Row className="layout__loginSignup-right-copyright">
                <p >{t("copyright")}</p>
            </Row>
            {/* END COPY RIGHT */}
          </Col>
        </Row>
      </div>
    );
  }
}
export default withTranslation("translation")(LoginRegister);


