/* /pages/register.js */

import React, { useState, useContext } from "react";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { registerUser } from "../components/auth";
import AppContext from "../components/context";
import Router from "next/router";

const Register = () => {
  const[modalActive,setModalActive] = React.useState(false);

  class RegisterModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: modalActive,
        backdrop: true
      };
      console.log(modalActive)
      this.toggle = this.toggle.bind(this);
      this.changeBackdrop = this.changeBackdrop.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }

    changeBackdrop() {
      this.setState({ backdrop: 'static' });
    }
  
    render() {
      return (
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={'static'}>
            <ModalHeader toggle={this.toggle}>Account Created Successfully!</ModalHeader>
            <ModalBody>
            {`Log in to get started viewing and ordering food from your favorite restaurants!`}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={()=> Router.push("/login")}>Login</Button>{' '}
              <Button color="secondary" onClick={()=> Router.push("/")}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }

  const [data, setData] = useState({ email: "", username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({message: null});
  const appContext = useContext(AppContext);
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (
    <Container>
    <RegisterModal/>
      <Row>
        <Col sm="12" md={{ size: 5, offset: 3 }}>
          <div className="paper">
            <div className="header">
              <img src="http://localhost:1337/uploads/1d8c024b27714ba5964f76c627c3a8b8.jpg" height="70%" width="40%"/> 
              Sign Up
            </div>
            <section className="wrapper">
            <small style={{color: "red", fontWeight:"bold"}}>
                {error.message ? error.message : ''}
              </small>
              <Form>
                <fieldset disabled={loading}>
                  <FormGroup>
                    <Label>Username:</Label>
                    <Input
                      disabled={loading}
                      onChange={(e) =>
                        setData({ ...data, username: e.target.value })
                      }
                      value={data.username}
                      type="text"
                      name="username"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Email:</Label>
                    <Input
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                      value={data.email}
                      type="email"
                      name="email"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: 30 }}>
                    <Label>Password:</Label>
                    <Input
                      onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                      }
                      value={data.password}
                      type="password"
                      name="password"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>
                  <FormGroup>
                    {/* <span>
                      <a href="">
                        <small>Forgot Password?</small>
                      </a>
                    </span> */}
                    <Button
                      style={{ float: "right", width: 120 }}
                      color="primary"
                      disabled={loading}
                      onClick={() => {
                        if(data.username.length < 3){
                          setError({message: "Username must be atleast 3 characters"});
                          return;
                        };
                        if(data.password.length < 8){
                          setError({message: "Password must be atleast 8 characters"});
                          return;
                        };
                        if(!emailRegex.test(data.email)){
                          setError({message: "Email is invalid"});
                          return;
                        };
                        setLoading(true);
                        registerUser(data.username, data.email, data.password)
                          .then((res) => {
                            // set authed user in global context object
                            appContext.setUser(res.data.user);
                            setLoading(false);
                            setModalActive(true);
                            console.log(`registered user: ${JSON.stringify(res.data)}`)
                          })
                          .catch((error) => {
                            setError({message: "User already exists"});
                            console.log(error)
                            setLoading(false);
                          });
                      }}
                    >
                      {loading ? "Loading.." : "Submit"}
                    </Button>
                  </FormGroup>
                </fieldset>
              </Form>
            </section>
          </div>
        </Col>
      </Row>
      <style jsx>
        {`
          .paper {
            border: 1px solid lightgray;
            box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
              0px 1px 1px 0px rgba(0, 0, 0, 0.14),
              0px 2px 1px -1px rgba(0, 0, 0, 0.12);
            border-radius: 6px;
            margin-top: 90px;
          }
          .notification {
            color: #ab003c;
          }
          .header {
            width: 100%;
            height: 120px;
            background-color: #2196f3;
            margin-bottom: 30px;
            border-radius-top: 6px;
            color: white;
            font-size: 2.5em;
          }
          .wrapper {
            padding: 10px 30px 20px 30px !important;
          }
          a {
            color: blue !important;
          }
          img {
            margin: 15px 30px 10px 50px;
          }
        `}
      </style>
      
    </Container>
  );
};
export default Register;
