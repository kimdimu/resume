import React, { Component } from 'react';
import skills from './skills.module.scss';

class Box extends Component {
    render() {
        const content = this.props.content;
        const desc = content.desc.map((desc, index) => {
            const proficiency = desc.proficiency + "%";
            return (<div key={index}><p>{desc.name}</p><span><span className={skills.proficiency} style={{ '--proficiency': proficiency }}></span></span></div>)
        })

        return (
            <div className={skills.box}>
                <h4>{content.category}</h4>
                <div className={skills.desc}>
                    {desc}
                </div>
            </div>
        );
    }
}

export default Box