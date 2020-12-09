

// interface DefaultOptions {
//   watchQuery: any;
//   query: any;
// }

// const defaultOptions: DefaultOptions = {
//   watchQuery: {
//     fetchPolicy: "no-cache",
//     errorPolicy: "ignore"
//   },
//   query: {
//     fetchPolicy: "no-cache",
//     errorPolicy: "all"
//   }
// };

// export const client = new ApolloClient({
//   link: createHttpLink({
//     uri: `http://stile.pt.optusnet.com.au/graphql`
//   }) as any,
//   cache: new InMemoryCache(),
//   defaultOptions: defaultOptions
// });
import { applyMiddleware, createStore, combineReducers } from "redux";
import { reducer as form } from "redux-form";


import ReduxAsyncQueue from "redux-async-queue";

const rootReducer = combineReducers({ form });
const configureStore = () => {
  // const reducer = (state = {}, action: any) => state;
  return createStore(
    rootReducer,
    applyMiddleware(ReduxAsyncQueue)
  );
};

export default configureStore;
