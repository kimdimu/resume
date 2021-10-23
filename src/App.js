import { Component } from "react";
import { Route } from 'react-router-dom';
import Resume from './pages/Resume';
import PDFViewer from './pages/PDFViewer';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Resume} />
                <Route exact path="/pdfviewer/:folder/:pdf" component={PDFViewer} />
            </div>
        );
    }
}

export default App;
