import { Component } from 'react';
import styles from '../../styles.module.scss';

class Right extends Component {
    render() {
        const content = this.props.content;
        const intro = content.intro.split("\n\n").map((line, index) => <p key={index}>{line}<br /></p>);

        return (
            <div className={styles.Right}>
                {intro}
            </div>
        );
    }
}

export default Right;