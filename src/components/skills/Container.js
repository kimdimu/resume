import { Component } from 'react';
import Subject from '../Subject';
import Wrapper from './Wrapper';
import styles from '../../styles.module.scss';

class Container extends Component {
    render() {
        const subject = this.props.contents.subject;
        const contents = this.props.contents.contents;

        return (
            <div className={styles.Container} >
                <Subject subject={subject}></Subject>
                <Wrapper contents={contents}></Wrapper>
            </div>
        );
    }
}

export default Container