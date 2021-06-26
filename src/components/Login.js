import React from 'react';
import Api from "./api/Api";
import { Col, Row, Container, Form, Button, Alert } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

function Login() {

    const history = useHistory()
    const [email, setEmail] = React.useState();
    const [visible, setVisible] = React.useState(false);
    const [btnDisable, setBtnDisable] = React.useState(false);
    const [msg, setMsg] = React.useState('')
    const handleSubmit= async (e) => {
        e.preventDefault();
        // const response = await Api.post('start-exam', {email:email});

        const response = await Api.post('start-exam', {email:email})
        .then(res => {
            return res
        }).catch(e => {
            return e;
        })

        if(response.data.success === true){
            localStorage.setItem('student_id', response.data.data.id)
            history.push("/exam-interface");
        } else {
            setMsg(response.data.msg)
            setVisible(true)
        }
    }

  return (
    <>
      <Container >
        <Row >
          <Col md={{ span: 6, offset: 3 }}>

            <Form onSubmit={e => {handleSubmit(e)}} style={{backgroundColor:'#bbeffd', border:"1px solid #61dafb", marginTop:"10%", padding:"2% 4%"}}>
            

                <Alert variant="danger" show={visible} >
                    {msg}
                </Alert>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" 
                    name="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}/>
              </Form.Group>
              <Button variant="primary" type="submit" disabled={btnDisable}>
                Submit 
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>    
    </>
  );
}

export default Login;
