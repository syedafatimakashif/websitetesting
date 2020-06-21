import React, { Component } from 'react';
import { DISHES } from '../shared/dishes'
import Menu from './MenuComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import DishdetailComponent from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';


class Main extends Component {
  constructor(props)
  {
    super(props);

    this.state={
      dishes:DISHES,
    };

  }

   
    


  render(){


    const HomePage = () => {
        return(
            <Home/> 
        );
      }

    return (
        <div>
            <Header/>
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route path='/aboutus' component={About}/>
                <Route path='/contactus' component={Contact}/>
                <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                <Redirect to="/home" />
            </Switch>
            <Footer/>
        </div>
    );
  }
  
}

export default Main;
