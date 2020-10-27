import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    renderDish(dish){
        if (dish != null){
            return(
                <div>
                    <Card>
                        <CardImg top width="100%" src={dish.image} />
                        <CardTitle className="ml-4 mt-4">{dish.name}</CardTitle>
                        <CardText className="ml-4 mr-4">{dish.description}</CardText>
                    </Card>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    renderComments(dish){
        
        if(dish != null){
            const comments = dish.comments.map((comment) => {
                return(
                    <div key={comment.id}>
                        <li>{comment.comment} <br/>
                            -- {comment.author}, 
                            {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                    </div>
                )
            });
            return(
            
                <div>
                    <h4> Comments </h4>
                    <ul>
                        {comments}
                    </ul>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
        
    }
    render(){
        return(
            <div className="container">
                <div  className="row">
                    <div className="col-sm-12 col-md-5">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-sm-12 col-md-5">
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            </div>
            
        )
    }
    
}

export default DishDetail;