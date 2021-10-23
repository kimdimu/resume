import { Component } from 'react';
import Left from './Left';
import Right from './Right';
import styles from '../../styles.module.scss';

class Wrapper extends Component {
    render() {
        const content = this.props.content;

        return (
            <div className={styles.Wrapper}>
                <Left content={content}></Left>
                <Right content={content}></Right>
            </div>
        );
    }
}

export default Wrapper;