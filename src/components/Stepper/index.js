import {Row, Col} from "react-bootstrap";

import "./styles.scss";

const Stepper = ({steps, activeIndex}) =>{

    return (
        <Row className="stepper">
            <Col>
                <Row className="steps gy-4">
                    {steps.map((step, index) => (
                        <>
                        <Col sm={2} className={`step-content ${index<activeIndex ? "step-completed" : index===activeIndex ? "step-active" : "step-uncompleted"}`}>
                            <div className="step">
                                <h4>{index+1}</h4>
                            </div>
                            {index===activeIndex && <h5>{step.name}</h5>}
                        </Col>
                        {index+1 !== steps.length && <Col className="line-container" sm={3}><div className={`line ${index < activeIndex ? "dark-line" : "light-line"}`}></div></Col>}
                        </>
                    ))}        
                </Row>
            </Col>
        </Row>
    )
}

export default Stepper;