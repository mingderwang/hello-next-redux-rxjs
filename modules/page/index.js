import { connect } from 'react-redux';
import PageWrapper from './pageWrapper'

const page = (props) => {
    console.log(props)
    return(
        <div>
            <div>
                <h1>Home Page</h1>
            </div>
            <style jsx>{`
            `}</style>
        </div>
    )
}
export default PageWrapper(connect(state=>state)(page));
