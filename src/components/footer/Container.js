import { Component } from 'react';
import styles from '../../styles.module.scss';
import footer from './footer.module.scss';

class Container extends Component {
	render() {
		const contents = this.props.contents;

		return (
			<div className={styles.Container}>
				<div className={footer.Footer}>
					<p>Created by <a href="https://github.com/Lee-Minhoon/simple-react-resume-template" target="_blank" rel="noopener noreferrer">React</a></p>
					<p>Last Updated at {contents.updated}</p>
				</div>
			</div>
		);
	}
}

export default Container;