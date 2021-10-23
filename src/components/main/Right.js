import { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import styles from '../../styles.module.scss';

class Right extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: null,
            hasModal: false,
        };
    }

    controlModal = (index) => {
        this.setState({
            index: index,
            hasModal: !this.state.hasModal
        });
    }

    render() {
        const content = this.props.content;
        const desc = content.desc.map((desc, index) => {
            if (desc.sub.length) {
                const subs = <ul>{desc.sub.map((sub, index) => <li key={index}>{sub}</li>)}</ul>
                return (
                    <li key={index} className={styles.foldable}>
                        <details><summary>{desc.main}</summary>{subs}</details>
                    </li>
                )
            }
            return <li key={index}>{desc.main}</li>
        })
        const keywords = content.keywords.map((keyword, index) => <span key={index}>{keyword}</span>)
        const images = content.images.map((image, index) => <img key={index} onClick={() => this.controlModal(index)} src={`${process.env.PUBLIC_URL}/projects/${content.folder}/${image}`} alt="alt_image" />)
        const pdfs = content.pdfs.map((pdf, index) => {
            const thumbnail = <img src={`${process.env.PUBLIC_URL}/projects/${content.folder}/${pdf.thumbnail}`} alt="alt_pdf" />
            if (window.location.hostname === "localhost") {
                return <Link key={index} to={`pdfviewer/${content.folder}/${pdf.pdf}`} target="_blank">{thumbnail}</Link>
            }
            return <Link key={index} to={`*/pdfviewer/${content.folder}/${pdf.pdf}`} target="_blank">{thumbnail}</Link>
        })

        return (
            <div className={styles.Right}>
                <h4>{content.title}</h4>
                <h5>{content.subtitle}</h5>
                <div className={styles.desc}><ul>{desc}</ul></div>
                <div className={styles.keywords}>{keywords}</div>
                <div className={styles.images}>{images}</div>
                <div className={styles.pdfs}>{pdfs}</div>
                {this.state.hasModal && (
                    <Modal title={content.title} folder={content.folder} images={content.images} index={this.state.index} close={this.controlModal}></Modal>
                )}
            </div>
        );
    }
}

export default Right;