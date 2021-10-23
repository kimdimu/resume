import { Component } from 'react';
import Box from './Box';
import styles from '../../styles.module.scss';

class Wrapper extends Component {
    render() {
        const contents = this.props.contents;
        const box = contents.map((content, index) => (<Box key={index} content={content} />))

        return (
            <div className={styles.Wrapper} style={{ justifyContent: 'center' }}>
                {box}
            </div>
        );
    }
}

export default Wrapper