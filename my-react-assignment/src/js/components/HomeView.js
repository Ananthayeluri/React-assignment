import React, { Component } from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ActionHome from 'material-ui/svg-icons/action/home';

import home_background from '../../images/home_background.png'
import kickbuttowski from '../../images/kickbuttowski.png'

import PaperToolbar from './PaperToolbar';

class HomeView extends Component {

    render() {
        return (
            <div>
                <PaperToolbar title="Home" iconElement={<ActionHome/>}/>
                <Card className="inner-padding">
                    <CardHeader
                        title="Welcome"
                        avatar={kickbuttowski}
                    />
                    <CardMedia>
                        <img src={home_background} alt="Home"/>
                    </CardMedia>
                    <CardTitle title="React assignment" subtitle=" rewards program to customers" />
                    <CardText>
                    A retailer offers a rewards program to its customers, awarding points based on each recorded purchase. 

                    A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction

                    (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points). 

                    Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.

 
                    ·        Make up a data set to best demonstrate your solution

                    ·        Check solution into GitHub

                    ·         Solution should be built using ReactJS or Spring(Spring Boot)

                    ·         Instructions for running the solution should be uploaded in ReadMe file on GitHub
                    
                    </CardText>
                </Card>
            </div>
        );
    }
}


export default HomeView;
