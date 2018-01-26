class MyReactComponent extends React.Component {
    render() {
        let link;
        if (this.props.user.session) link = React.createElement(
            'a',
            { href: '/logout' },
            'Logout'
        );else link = React.createElement(
            'a',
            { href: '/login' },
            'Login'
        );
        return React.createElement(
            'div',
            null,
            link
        );
    }
}
