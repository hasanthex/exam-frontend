import React from 'react';
import Api from "./api/Api";
import { Col, Row, Container, Form } from "react-bootstrap";

function ExamInterface() {

    const studentId = localStorage.getItem('student_id')
    const [option, setOption] = React.useState([{"opt":1,"que":"Option 1"},{"opt":2,"que":"Option 2"},{"opt":3,"que":"Option 3"},{"opt":4,"que":"Option 4"}])
    const [question, setQuestion] = React.useState('')

    const handleSubmit= async (e) => {
        e.preventDefault();
    }

    const fetchQuestion = async() => {
        const questions = await Api.post('get-questions', {id: studentId})
        .then(res => { 
            return res
        })
        .then(val => {
            setQuestion(val.data.data.question)
            // setOption(JSON.parse(val.data.data.options))
        })
        .catch(e => {return e})
    }

    React.useEffect(() => {
        fetchQuestion();
        console.log(option)
        // const val = [{"opt":1,"que":"Option 1"},{"opt":2,"que":"Option 2"},{"opt":3,"que":"Option 3"},{"opt":4,"que":"Option 4"}];
        //  console.log(JSON.stringify(val))
        // option.map(((value) => (
        //     console.log(value.que)
        // )))
    }, []);

  return (
    <>
      <Container >
        <Row >
          <Col md={{ span: 6, offset: 3 }}>
          <Form style={{backgroundColor:'#bbeffd', border:"1px solid #61dafb", marginTop:"10%", padding:"2% 4%"}}>
            
            <p>
                <u>Question</u> 1. <strong>{question}</strong>  
            </p>
            <hr/>
           <div key='inline-radio' className="mb-3">
                <b>Select The Corret Answer: </b>
                <br/><br/>
                {option.map((val, index) => (
                    <Form.Check
                        inline
                        label={val.que}
                        name="answer"
                        type="radio"
                        id={`inline-radio-${index}`}
                    />
                ))}
            </div>

                    
                   
                

            
            </Form>
          </Col>
        </Row>
      </Container>    
    </>
  );
}

export default ExamInterface;
