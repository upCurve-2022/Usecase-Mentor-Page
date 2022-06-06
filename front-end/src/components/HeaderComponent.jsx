import React, { Component } from 'react';
class HeaderComponent extends Component {
    
    constructor(props){
        super(props)

        this.state={

        }
    }
    render() {
        return (
            <div>
                <header className="title">
                    <nav className="navbar navbar-expand-md">
                        <div>Target Upcurve'2022</div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;