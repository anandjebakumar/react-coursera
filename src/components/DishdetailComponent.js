import React from 'react';
import { Card, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({dish}){
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

function RenderComments({comments}){

    const commentsIterator = comments.map((comment) => {
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
                {commentsIterator}
            </ul>
        </div>
    )
}

const DishDetail = (props) => {

    if(props.dish != null){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div  className="row">
                    <div className="col-sm-12 col-md-5">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-sm-12 col-md-5">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
            
        );
    }
    else{
        return(
            <div></div>
        );
    }
    
}

export default DishDetail;