import React, {Component} from 'react'
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

 class DishdetailComponent  extends Component
 {
     constructor(props)
     {
         super(props);
         this.state={

         };
     }

     renderDish(dish) {
   
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
    }

    renderComments(commentsArray)
    {
        if(commentsArray!=null)
        {
            const comment = commentsArray.map((comm) => {

                const options = { year: 'numeric', month: 'short', day: 'numeric' };
                return (
                    
                   
                        <div key={comm.id}>
                            <li>{comm.comment}</li>
                            <br/>
                            <li>--{comm.author} , {new Date(comm.date).toLocaleDateString('en-US', options)}</li> 
                            <br/> 
                        </div>
                   
                );
            });
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comment}        
                    </ul>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }

    }

     render()
     {
        const dish = this.props.selectedDish
        if (dish == null) {
            return (<div></div>)
        }
        else{
            const dishItem = this.renderDish(dish)
            const commentItem = this.renderComments(dish.comments)

            return (
                <div  className="container">
                    <div className='row'>
                        {dishItem}
                        {commentItem}
                    </div>
                </div>  
            )
        }
    }

 }

 export default DishdetailComponent;