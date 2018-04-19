import React from 'react';
import { Provider } from 'react-redux';
import { getStore } from '~/redux-config'
const page = (Page) => {
    return (
        class PageWrapper extends React.Component {
            render() {
                return (
                    <Provider store={getStore()}>
                        <Page />
                    </Provider>
                )
            }
        }
    )
}
export default page;
