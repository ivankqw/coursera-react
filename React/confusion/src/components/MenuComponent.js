import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }

    renderComments(commentsArr) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        if (commentsArr == null) { return ( <div></div> )}
        const comments = commentsArr.map((comment) => {
            return (
                <>
                <ListGroupItem key={comment.id} className="border-0">
                    {comment.comment}
                </ListGroupItem>
                <ListGroupItem key={comment.id} className="border-0">
                    -- {comment.author} , {months[new Date(comment.date).getMonth()]} {new Date(comment.date).getDate()}, {new Date(comment.date).getFullYear()}
                </ListGroupItem>
                </>
            )
        })
        return (
            <div className="col-12 col-md-5 m-1">
            <ListGroup> 
            <h4>Comments</h4>
                {comments}
            </ListGroup>
            </div>
        )
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>                      
                        <CardImgOverlay>
                            <CardTitle>
                                {dish.name}
                            </CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <DishDetail selectedDish={this.state.selectedDish} />
                    {this.renderComments(this.state.selectedDish ? this.state.selectedDish.comments : null)}
                </div>
            </div>
        );
    }
}

export default Menu;