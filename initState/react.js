/**
 * Created by wb-fkc215799 on 2016/7/14.
 */
var BindToggleEvent = React.createClass({
    getInitialState: function() {
        return {
            title: "显示",
            show: true
        }
    },
    handleToggle: function(event) {
        var show = !this.state.show;
        this.setState({
            show: show,
            title: show?"显示":"隐藏"
        });
        show?this.refs.label.style.display = "":this.refs.label.style.display = "none";
    },
    render: function() {
        return (
            <div>
                <input type="button" value={this.state.title} onClick={this.handleToggle}/>
                <label ref="label">开关显示和隐藏</label>
            </div>
        )

    }
});

var BindInputEvent = React.createClass({
    getInitialState: function() {
        return {
            bindData: "hello world! "
        };
    },
    handleChange: function(event) {
        this.setState({bindData: event.target.value});
    },
    render: function() {
        return (
            <div>
                <input type="text" value={this.state.bindData} onChange={this.handleChange} />
                <br/>
                <label>{this.state.bindData}</label>
            </div>
        );
    }
});
ReactDOM.render(<div><BindToggleEvent /> <BindInputEvent /></div>,
    document.getElementById("container")
);