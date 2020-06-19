import React from 'react'
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

    function RenderDish({dish}) {
   
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

    function RenderComments({commentsArray})
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

     const DishdetailComponent = (props)=>{
        const dish = props.selectedDish;
        if (dish == null) {
            return (<div></div>)
        }
        else{
           

            return (
                <div  className="container">
                    <div className='row'>
                        <RenderDish dish={dish}/>
                        <RenderComments commentsArray={dish.comment}/>
                    </div>
                </div>  
            )
        }
    }

 export default DishdetailComponent;