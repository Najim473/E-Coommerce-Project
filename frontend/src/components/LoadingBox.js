import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
function LoadingBox() {
    return (
        <Container>
            <Spinner animation="border" role='status'>
                <span className="visual-hidden">Loading...</span>
            </Spinner>
        </Container>
    )
}

export default LoadingBox