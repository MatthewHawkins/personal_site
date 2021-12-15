import React from 'react';
import '../body.css'


import { Jumbotron } from 'reactstrap';
import {Row, Col} from 'react-bootstrap';

import logo from '../photos/benny.jpg'

function AboutMe () {

        return (
            <Jumbotron className='jumboOne' id='AboutMe'>
            <Row className='rows'>
            <Col sm={9} className="text-left text-md-right">
                <h1 className="titleFont"><span>Matthew</span><span className='lastName'> Hawkins</span></h1>
                <br></br>
                <p className="small">I'm a computer science student at Oregon State University finishing up my final term. I came to
                    computer science after studying Spanish in school for a year - drawn not only to programming's
                    similarities to language, but also to the logical, algorithmic approach to problem solving required 
                    in the field. 
                    <br></br> <br></br>       
                    After finishing my first few courses, I realized that I enjoyed not only learning the concepts 
                    taught in the program, but also teaching them to others. I became an Undergraduate Learning 
                    Assistant, where I would teach groups of 20-30 students the fundamental concepts of
                    object-oriented programming. I love the opportunity to teach students who are just beginning
                    their computer science journey, and have realized that teaching is often the best method to learn
                    a skill deeply.
                    <br></br><br></br>
                    Later, in addition to working as a learning assistant, I began working with Dr. Jennifer 
                    Parham-Mocello and Dr. Martin Erwig to develop computer science curriculum for younger
                    Students. This curriculum focuses around teaching middle school students the fundamentals of
                    programming, starting with a no-code approach, and then progressing into a functional 
                    language. While working on this project, I had the opportunity to update, modify, and create 
                    online materials for the project, and gained an appreciation for the marriage of creativity and 
                    logic that web design and UI/UX provides.
                    <br></br><br></br>
                    As I look to enter the professional market, I’m interested in finding opportunities that allow me to 
                    utilize my love of learning, teaching and computer science. Having worked with many different 
                    teams in the past during my time at Costco Wholesale, I know the quality of those you work with
                    is just as important as the work you do, and hope to find a great team of people to join! 
                    Please reach out to <a href="mailto: matthew.hawkins1115@gmail.com">matthew.hawkins1115@gmail.com</a> to connect!
                    </p>
                    <br></br>
            </Col>
            <Col sm={3} className="text-center">
                <img src={logo} className='img-fluid rounded' alt="Benny the Beaver and me"></img>
            <p className="small">
                <b>Contact Me</b>
                <br></br>
                2101 Kelley Engineering Center
                <br></br>
                <a href="mailto: parhammj@oregonstate.edu">parhammj@oregonstate.edu</a>
                <br></br>
                (541) 737-8895
            </p>
            </Col>
          </Row>
          <br></br>
          <Row className='text-center'>
            <div className="downArrow bounce">
                <img width="40" height="40" alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=" />
            </div>
          </Row>
        </Jumbotron>
        );
}

export default AboutMe;