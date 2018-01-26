class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.launchClock();
        this.state = { current: new Date().toLocaleString() };
    }
    render() {
        return React.createElement(
            'div',
            null,
            this.state.currentTime
        );
    }
    launchClock() {
        setInterval(() => {
            console.log('Updating time!');
            this.setState({
                currentTime: new Date().toLocaleString()
            });
        }, 1000);
    }
}

ReactDOM.render(React.createElement(Clock, null), document.getElementById('content'));
