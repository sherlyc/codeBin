handleMonthChange_next = () => {
    this.setState({
        currentMonth: +this.state.currentMonth + 1
    })
    this.props.getCalendarData(this.state.currentMonth)
}

## the above code doesn't work because setState is asynchronous. getCalendarData function triggered before the currentMonth changed.

handleMonthChange_next = () => {
    this.setState({
        currentMonth: +this.state.currentMonth + 1
    }, () => {
     this.props.getCalendarData(this.state.currentMonth)
    })
}

## Put getCalendarData in a callback, problem solved. Setstate has an optional second parameter which is a callback function!
