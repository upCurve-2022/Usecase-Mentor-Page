import React, { Component } from 'react';
import target from '../images/target.jpg';

class FrontPageComponent extends Component {
    constructor(props){
        super(props)
        this.state={
           
       }
        this.addMentor=this.addMentor.bind(this);
        this.getMentors=this.getMentors.bind(this);
     }
  
      addMentor(){
          this.props.history.push('/mentor');
      }
      getMentors(){
         this.props.history.push('/mentors');
      }
  
    render() {
        return (
            <div>
                <h2 className='sub-head'>Mentors</h2>
                <img src={target} alt-text="Target logo"/><br/>
                <div  width="25%">
                    <br/>
                    <button className="btn btn-primary" onClick={(this.addMentor)}>Add Mentor</button>
                    &emsp;&emsp;&emsp;
                    <button className="btn btn-primary" onClick={(this.getMentors)}>View All Mentors</button>
                </div>
                
            </div>
        );
    }
}

export default FrontPageComponent;