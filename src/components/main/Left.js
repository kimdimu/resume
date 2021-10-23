import { Component } from 'react';
import styles from '../../styles.module.scss';

class Left extends Component {
    render() {
        const content = this.props.content;

        return (
            <div className={styles.Left}>
                <h4>{content.period}</h4>
                <a href={content.link} target="_blank" rel="noopener noreferrer">{content.link}</a>
            </div>
        );
    }
}

export default Left;