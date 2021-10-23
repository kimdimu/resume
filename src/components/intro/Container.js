import { Component } from 'react';
import Subject from '../Subject';
import Wrapper from './Wrapper';
import styles from '../../styles.module.scss';

class Container extends Component {
    render() {
        const contents = this.props.contents;

        return (
            <div className={styles.Container}>
                <Subject subject={contents.subject}></Subject>
                <Wrapper content={contents}></Wrapper>
            </div>
        );
    }
}

export default Container;