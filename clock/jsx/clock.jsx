class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.launchClock()
        this.state = {current: (new Date()).toLocaleString()}
    }
    render() {
        return <div>{this.state.currentTime}</div>
    }
    launchClock() {
        setInterval(() => {
            console.log('Updating time!')
            this.setState({
                currentTime: (new Date()).toLocaleString()
            })
        }, 1000)
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('content')
)
