import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import {ListGroup, ListGroupItem} from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle> {dish.name}</CardTitle>
                        <CardText> {dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    renderComments(commentsArr) {
        if (commentsArr == null) { return (<div></div>) }
        const comments = commentsArr.map((comment) => {
            return (
                <>
                    <ListGroupItem key={comment.id} className="border-0">
                        {comment.comment}
                    </ListGroupItem>
                    <ListGroupItem key={comment.id} className="border-0">
                        -- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                    </ListGroupItem>
                </>
            )
        })
        return (
            <div>
                <ListGroup>
                    <h4>Comments</h4>
                    {comments}
                </ListGroup>
            </div>
        )
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish ? this.props.dish.comments : null)}
                </div>
            </div>
        )
    }

}

export default DishDetail;