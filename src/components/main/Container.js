import { Component } from 'react';
import Subject from '../Subject';
import Wrapper from './Wrapper';
import styles from '../../styles.module.scss';

class Container extends Component {
    render() {
        const subject = this.props.contents.subject;
        const contents = this.props.contents.contents;
        const wrapper = contents.map((content, index) => (<Wrapper key={index} content={content} />))

        return (
            <div className={styles.Container}>
                <Subject subject={subject}></Subject>
                {wrapper}
            </div>
        );
    }
}

export default Container;