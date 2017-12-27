import React from "react";
import PropTypes from "prop-types";

export default class ResponsiveComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { canRender: false };
        this._mediaQueryList = null;
        this._updateState = this._updateState.bind(this);
    }

    componentWillMount() {
        this._tryToRender();
    }

    componentWillUnmount() {
        this._dispose();
    }

    componentWillReceiveProps(nextProps) {
        this._tryToRender(nextProps);
    }

    _tryToRender(props = this.props) {
        if (!props.query) {
            throw new Error("ResponsiveComponent: `query` is a required prop!");
        }

        this._dispose();
        this._mediaQueryList = global.matchMedia(props.query);
        this._mediaQueryList.addListener(this._updateState);
        this._updateState();
    }

    _dispose() {
        if (this._mediaQueryList) {
            this._mediaQueryList.removeListener(this._updateState);
            this._mediaQueryList = null;
        }
    }

    _updateState() {
        if (this._mediaQueryList.matches !== this.state.canRender) {
            this.setState({ canRender: this._mediaQueryList.matches });
        }
    }

    get _display() {
        return React.createElement(this.props.tag,
                                   { className: "responsive-component" },
                                   this.props.children);
    }

    render() {
        return this.state.canRender ? this._display : null;
    }
}

ResponsiveComponent.propTypes = {
    query: PropTypes.string.isRequired,
    tag: PropTypes.string
};

ResponsiveComponent.defaultProps = {
    tag: "div"
};