import React, { Component } from 'react';
import mentorService from '../service/MentorService';

class CreateMentorComponent extends Component {
    constructor(props){
        super(props)
    
        this.state= {
            name: '',
            experience: '',
            mailId: '',
            topic: ''
        }
        this.changeNameHandler= this.changeNameHandler.bind(this);
        this.changeExperienceHandler=this.changeExperienceHandler.bind(this);
        this.changeMailIdHandler=this.changeMailIdHandler.bind(this);
        this.changeTopicHandler=this.changeTopicHandler.bind(this);
        this.saveMentor=this.saveMentor.bind(this);
    }
    saveMentor=(e) => {
        e.preventDefault();
        let mentor={name: this.state.name, experience: this.state.experience, mailId: this.state.mailId, 
            topic: this.state.topic};
            console.log('mentor => '+ JSON.stringify(mentor));
            mentorService.createMentor(mentor).then( res =>{
                 this.props.history.push('/mentors');
             });
        }
    changeNameHandler=(event) => {
        this.setState({name: event.target.value});
    }
    changeExperienceHandler=(event) => {
        this.setState({experience: event.target.value});
    }
    changeMailIdHandler=(event) => {
        this.setState({mailId: event.target.value});
    }
    changeTopicHandler=(event) => {
        this.setState({topic: event.target.value});
    }

    cancel(){
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row g-3">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 >New Mentor</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Mentor Name: </label>
                                        <input placeholder="name" name="name" className="form-control"
                                          value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Experience: </label>
                                        <input placeholder="experience" name="experience" className="form-control"
                                          value={this.state.experience} onChange={this.changeExperienceHandler}/>
                                    </div>
                                    <div className="form-group">    
                                        <label>Mail Id: </label>
                                        <input placeholder="mailId" name="mailId" className="form-control"
                                          value={this.state.mailId} onChange={this.changeMailIdHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Topic: </label>
                                        <input placeholder="topic" name="topic" className="form-control"
                                          value={this.state.topic} onChange={this.changeTopicHandler}/>
                                    </div><br/>
                                    <button className="btn btn-success" onClick={this.saveMentor}>Save</button>
                                    &emsp;&emsp;
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateMentorComponent;
