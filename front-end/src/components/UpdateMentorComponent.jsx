import React, { Component } from 'react';
import mentorService from '../service/MentorService';


class UpdateMentorComponent extends Component {
    constructor(props){
        super(props)
    
        this.state= {
            id: this.props.match.params.id,
            name: '',
            experience: '',
            mailId: '',
            topic: ''
        }
        this.changeNameHandler= this.changeNameHandler.bind(this);
        this.changeExperienceHandler=this.changeExperienceHandler.bind(this);
        this.changeMailIdHandler=this.changeMailIdHandler.bind(this);
        this.changeTopicHandler=this.changeTopicHandler.bind(this);
        this.updateMentor=this.updateMentor.bind(this);
    }
    componentDidUpdate(){
        mentorService.getMentorById(this.state.id).then( (res) => {
            let mentor=res.data;
            this.setState({name: mentor.name, experience: mentor.experience, mailId: mentor.mailId, topic: mentor.topic
            });
            
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
    updateMentor= (e) => {
        e.preventDefault();
        let mentor={name: this.state.name, experience: this.state.experience, mailId: this.state.mailId, topic: this.state.topic};
        console.log('mentor => '+ JSON.stringify(mentor));
        mentorService.updateMentor(this.state.id,mentor).then((res) =>{
                this.props.history.push('/mentors');
            });
    }
    cancel(){
        this.props.history.push('/mentors');
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Mentor</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Mentor Name: </label>
                                        <input placeholder="name" name="name" className="form-control"
                                         defaultValue={this.state.name} onChange={this.changeNameHandler}/>
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
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateMentor}>Save</button>
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

export default UpdateMentorComponent;
