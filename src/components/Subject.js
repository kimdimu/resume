import { Component } from 'react';
import styles from '../styles.module.scss';

class Subject extends Component {
    render() {
        const subject = this.props.subject;

        return (
            <div className={styles.Subject}>
                <h3>{subject}</h3>
            </div>
        );
    }
}

export default Subject;