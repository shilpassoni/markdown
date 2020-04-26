import React, { Component } from 'react'
import { marked } from 'react-marked'

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
    breaks: true,
  });
  
  // INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}` + '</a>';
  }
   
export default class Previewer extends Component {
    render() {
        return (
            <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.props.markdown, { renderer: renderer})}}>
                
            </div>
        )
    }
}
