import React, { Component } from 'react';
import './Modal.css'
import close from '../close.svg'
export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalShowing: this.props.isModalShowing
        }
    }
    closeModal = () =>{
        this.setState({isModalShowing:false})
        this.props.parent.closeModal();
    }
    render() {
        const { isModalShowing } = this.state;
        if (isModalShowing) {
            return (
                <div className="modal">
                    <div className="wrapper">
                        <div className="modal-header">
                            <div className="title">This is a modal 1 </div>
                            <div className="close-icon" onClick={this.closeModal}>
                                <img src={close} width="20px" height="20px" alt='' />
                            </div>

                        </div>
                        <div className="content">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex suscipit, nam consequuntur maiores
                            perspiciatis sint adipisci dolor, exercitationem dicta quisquam repudiandae consequatur porro
                            nesciunt veritatis nemo dolorem rem, vero id.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, explicabo. Quia, ut nesciunt ab
                            labore, autem distinctio ullam modi ea quae cum aut adipisci explicabo nostrum libero accusamus
                            quibusdam? Iste!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nemo facere dolorem exercitationem
                            modi voluptatibus at, dicta, ab aspernatur itaque necessitatibus odio, inventore id! Saepe eligendi
                            quibusdam quia omnis vel
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex suscipit, nam consequuntur maiores
                            perspiciatis sint adipisci dolor, exercitationem dicta quisquam repudiandae consequatur porro
                            nesciunt veritatis nemo dolorem rem, vero id.
                    </div>
                        <div className="footer">
                            <div className="btn btn-green">
                                <button>Accept</button>
                            </div>
                            <div className="btn btn-red">
                                <button>Decline</button>
                            </div>
                        </div>
                    </div>
                </div>

            );
        }
        return null;

    }
}