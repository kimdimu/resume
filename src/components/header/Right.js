import { Component } from 'react';
import styles from '../../styles.module.scss';
import header from './header.module.scss';

class Right extends Component {
    render() {
        const content = this.props.content;

        return (
            <div className={styles.Right}>
                <div className={header.contact}>
                    <a href={content.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /></a>
                    <a href={content.blog} target="_blank" rel="noopener noreferrer"><i className="fas fa-blog" /></a>
                    <a href={`mailto:${content.email}`}><i className="fas fa-envelope" /></a>
                </div>
            </div >
        );
    }
}

export default Right;