import React from 'react';

class Accordion extends React.Component {
    static defaultProps = { sections: [] };

    state = {
        currentSectionIndex: 0
    }

    renderButtons() {
        return this.props.sections.map((section, index) => (
            <li>
              <button key={index} onClick={() => this.handleButtonClick(index)}>
              {section.title}
              </button>
              <div style={{display: this.state.currentSectionIndex === index ? "block" : "none"}} className='content'>
                {section.content}
              </div>
            </li>
        ))
    }

    handleButtonClick(index) {
        this.setState({ currentSectionIndex: index })
    }

    render() {
        
        return(
            <div>
                {this.renderButtons()}
            </div>
        )
    }
}

export default Accordion;