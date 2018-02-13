import React from 'react';
import avatar from '../images/avatar.png';
import avatarMe from '../images/einstein.png';

export default class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            messages: []
        }

        this.addTestMessage();

    }

    addTestMessage(){
        let {messages} = this.state;

        for(let i=0; i<20; i++){
            let isMe = false;
            let pic = avatar
            if(i % 2 === 0){
                isMe = true;
                pic = avatarMe
            }
            const newMsg = {
                author: `Author: ${i}`,
                body:"test local",
                avatar: pic,
                me: isMe
            }

            messages.push(newMsg);
        }
    }
    render(){
        const messages = this.state.messages;
        return(
            <div class="app-messanger">
                    <div class="header">
                        <div class="left">
                            <div class="actions">
                                <button>
                                    New message
                                </button>
                            </div>
                        </div>
                        <div class="content">
                                <h2>Title</h2>
                        </div>
                        <div class="right">
                            <div class="user-bar">
    
                            <div class="profile-name">User Name</div>
                                <div class="profile-image">
                                    <img src={avatar} alt="profile pic"/>
    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main">
                        <div class="sidebar-left">
                        <div class="chanels">
                            <div class="chanel">
                                <div class="user-image">
                                <img src={avatar} alt="profile pic" />
                                </div>
                            <div class="chanel-info">
                                <h2>Tom</h2>
                                <p>Hey there..</p>
                            </div>
                            </div>
                            <div class="chanel">
                                <div class="user-image">
                                <img src={avatar} alt="profile pic" />
                                </div>
                            <div class="chanel-info">
                                <h2>Tom</h2>
                                <p>Hey there..</p>
                            </div>
                            </div>
                            <div class="chanel">
                                <div class="user-image">
                                <img src={avatar} alt="profile pic" />
                                </div>
                            <div class="chanel-info">
                                <h2>Tom</h2>
                                <p>Hey there..</p>
                            </div>
                            </div>
                            <div class="chanel">
                                <div class="user-image">
                                <img src={avatar} alt="profile pic" />
                                </div>
                            <div class="chanel-info">
                                <h2>Tom</h2>
                                <p>Hey there..</p>
                            </div>
                            </div>
                            <div class="chanel">
                                <div class="user-image">
                                <img src={avatar} alt="profile pic" />
                                </div>
                            <div class="chanel-info">
                                <h2>Tom</h2>
                                <p>Hey there..</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="content">
                            <div class="message-container">
                            {messages.map((msg, idx) => {
                                return (
                                    <div class={ msg.me === true ? 'message me' : 'message'} >
                                    <div class="msg-img">
                                         <img src={msg.avatar} alt="profile pic"/>
                                    </div>
                                    <div class="msg-body">
                                        {msg.body} by {msg.author}
                                    </div>
                                </div>
                                )

                            })} 
                            </div>

                            <div class="messagner-input">
                                <div class="text-input">
                                    <input class="text-message" placeholder="Write your messages..."/>
                                </div>

                                <div class="actions">
                                    <button class="send">Send</button>
                                </div>
                            </div>

                        </div>
                        <div class="current-profile">
                            <div class="user-image">
                                    <img src={avatar} alt="profile pic" />
                                    </div>
                                <div class="chanel-info">
                                    <h2>Tom</h2>
                                    <p>Active 2m ago</p>
                                </div>
                        </div>
                    </div>
                </div> 
        )
    }
}