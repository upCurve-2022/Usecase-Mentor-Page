import React, { Component } from 'react';
import mentorService from '../service/MentorService';

class ListMentorComponent extends Component {
        constructor(props){
            super(props)
            this.state={
                Mentor:[]
           }
           this.addMentor=this.addMentor.bind(this);
           this.editMentor=this.editMentor.bind(this);
           this.deleteMentor=this.deleteMentor.bind(this);
        }
    
         componentDidMount(){
             mentorService.getMentors().then((res) =>{
                 this.setState({Mentor:res.data});
                //  console.log('Mentor => '+ JSON.stringify());
             });
         }
         
        editMentor(id){
            this.props.history.push(`/mentors/${id}`);
        }
        addMentor(){
             this.props.history.push('/mentor')
         }
        deleteMentor(id){
    
            mentorService.deleteMentor(id).then((res) => {
                this.setState({Mentor: this.state.Mentor.filter(Mentor => Mentor.id !== id)});
            });
        }
    
        render() {
            return (
                <div>
                    <h2 className="sub-head">Mentors List</h2>
                    <div className="row">
                        <table className="table table-stripped table-bordered">
                            <thead>
                                <tr>
                                    {/* <th>Id</th> */}
                                    <th>mentor name</th>
                                    <th>experience</th>
                                    <th>mail Id</th>
                                    <th>topic</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Mentor.map(
                                        mentor=>
                                        <tr key={mentor.id}>
                                             {/* <td>{mentor.id.this.state.currentOrder}</td> */}
                                            <td>{mentor.name}</td>
                                            <td>{mentor.experience}</td>
                                            <td>{mentor.mailId}</td>
                                            <td>{mentor.topic}</td>
                                            <td>
                                                <button className="btn btn-outline-primary" onClick= { () => this.editMentor(mentor.id)}>Update</button> &emsp;
                                                <button className="btn btn-outline-info" onClick= { () => this.deleteMentor(mentor.id)}>Delete</button>
                                            </td>
    
                                        </tr>
                                     )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
    }
    

export default ListMentorComponent;