import React from 'react'

const Editor = (props) => {
    return (
        <div className="editorWrap">
          <textarea 
             type="text" 
             id="editor"
             rows="15"
             col="100"
            value={props.markdown}
            onChange={props.onChange}></textarea>  
        </div>
    )
}
export default Editor;
