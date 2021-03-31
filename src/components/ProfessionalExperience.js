import React from 'react'
import { Experience } from '../data/Experience'
import { Card } from 'react-bootstrap';

const renderExperience = (card, index) => {
    return (
        <Card /*style={{ width: "18rem" }}*/ key={index} className="my-3">
            <Card.Body>
                <Card.Title>{card.company}</Card.Title>
                <Card.Text>
                    <div>{card.title}</div>
                    <div>{card.dates}</div>
                    <ul>
                        {
                            card.responsibilities.map((resp, index) => {
                                return (<li>{resp}</li>);
                            })
                        }
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

const ProfessionalExperience = () => {

    return (
        <div id='experience' className='container'>
            <h4 className='heading'>Professional Experience</h4>
            {Experience.map(renderExperience)}
        </div>
    )
}

export default ProfessionalExperience;