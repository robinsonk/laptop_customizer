import React from 'react';
import './Parts.css'




class Parts extends React.Component {
        constructor(props){
                super(props);
                this.state = {
                        backgroundColor: props.bgColor,
                }
        }

        handleClick(position) {
                this.props.onClick && this.props.onClick(this.props.name, this.props.cost, this.props.title)
        }

        selectedColor(position) {
                const selectedName = Object.keys(this.props.selected).map(key => this.props.selected[key][0])
                console.log(selectedName);
            
                        if (selectedName.includes(this.props.name)) {
                                return 'gainsboro';
                        }
                
                return "";
        }

        render() {
                return (
                        <div className="feature" >
                                        <li key={this.props.index} className="feature__item"
                                        onClick={() => this.handleClick()}
                                        style={{backgroundColor: this.selectedColor()}}
                                      
                                        >
                                        <div className="feature_option">

                                                {this.props.name} (${this.props.cost})
                                        </div>
                                </li>
                        </div>
                )
        }
}

export default Parts;