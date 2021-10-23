import { Component } from "react";

class PDFViewer extends Component {
    render() {
        const pdf = `${process.env.PUBLIC_URL}/projects/${this.props.match.params.folder}/${this.props.match.params.pdf}`

        return (
            <div>
                <embed src={pdf} type="application/pdf" />
            </div>
        );
    }
}

export default PDFViewer;
