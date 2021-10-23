import { Component } from 'react';
import styles from '../../styles.module.scss';

class Left extends Component {
    render() {
        const content = this.props.content;

        return (
            <div className={styles.Left}>
                <h1>{content.name}</h1>
                <h2>{content.desc}</h2>
            </div>
        );
    }
}

export default Left;