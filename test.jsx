class MyReactComponent extends React.Component {
    render() {
        let link;
        if (this.props.user.session)
            link = <a href='/logout'>Logout</a>
        else     
            link = <a href='/login'>Login</a>
        return <div>{link}</div>
    }
}
