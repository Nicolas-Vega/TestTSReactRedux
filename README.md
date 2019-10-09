Hi, After the MR https://github.com/DefinitelyTyped/DefinitelyTyped/pull/38179 author @OliverJAsh. On my project I'm having a few problems with some tsx file that have reference to components that are using Proptypes with connect of react-redux on JS. I have narrow it down to this change since v7.1.3 is working fine.

On all those cases I'm getting the same error, for example:
`Type '{ propName: ReactNode; }' is not assignable to type 'IntrinsicAttributes & IntrinsicClassAttributes<Component<Pick<RouteComponentProps<any, StaticContext, any>, never>, any, any>> & Readonly<Pick<RouteComponentProps<any, StaticContext, any>, never>> & Readonly<...>'.
  Property 'propName' does not exist on type 'IntrinsicAttributes & IntrinsicClassAttributes<Component<Pick<RouteComponentProps<any, StaticContext, any>, never>, any, any>> & Readonly<Pick<RouteComponentProps<any, StaticContext, any>, never>> & Readonly<...>'.  TS2322`

Example of this:
Detail.tsx:

```import React from "react";
import Header from "./Header";


type Props = {
  propName?: React.ReactNode;
};

class Detail extends React.PureComponent<Props> {
  render() {
    const {
      propName
    } = this.props;
    return (
      <>
        <Header backButton={propName} />
      </>
    );
  }
}

export default Detail;
```

Header.js:

```
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Header extends React.PureComponent {

  render () {
    return (<>Test</>
  };
}

Header.propTypes = {
  backButton: PropTypes.any,
};

export default withRouter(
  connect(
    state => ({
      user: state.login.user,
    }),
    {
      ...loginActions,
    }
  )(Header)
);
```

_Originally posted by @Nicolas-Vega in https://github.com/DefinitelyTyped/DefinitelyTyped/pull/38179#issuecomment-536088368_


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
