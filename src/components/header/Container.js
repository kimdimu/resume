import { Component } from 'react';
import Wrapper from './Wrapper';
import styles from '../../styles.module.scss';

class Container extends Component {
    render() {
        const contents = this.props.contents;

        return (
            <div className={styles.Container}>
                <Wrapper content={contents}></Wrapper>
            </div>
        );
    }
}

export default Container;