import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

class Tabs extends Component {
    state = {
        activeTab: this.props.children[0].props.label,
    };

    render() {
        const { children } = this.props;
        const { activeTab } = this.state;

        return (
            <div className="tabs">
                <ol className="tab-list">
                    {children.map((child) => {
                        const { label } = child.props;

                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={(tab) => this.setState({ activeTab: tab })}
                            />
                        );
                    })}
                </ol>
                <div className="tab-content">
                    {children.map((child) => {
                        if (child.props.label !== activeTab)
                            return null;
                        return child.props.children;
                    })}
                </div>
            </div>
        );
    }
}

Tabs.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
}
export default Tabs;