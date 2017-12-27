/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { connect } from 'react-redux';
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button,
}from 'atomic'
import {Editor, EditorState, ContentState, RichUtils, convertToRaw, convertFromRaw} from 'draft-js';
import { 
  draftToMarkdown,
  markdownToDraft  
} from 'markdown-draft-js'

/* ------------------------- Internal Dependencies -------------------------- */
/*--- Redux Store ---*/
import { entityEditRequest } from 'store/departments/actions'

/* ------------------------ Initialize Dependencies ------------------------- */
// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote';
    default: return null;
  }
}

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}

const BLOCK_TYPES = [
      {label: 'Paragraph', style: 'paragraph'},
      {label: 'Span', style: 'span'},
      {label: 'H1', style: 'header-one'},
      {label: 'H2', style: 'header-two'},
      {label: 'H3', style: 'header-three'},
      {label: 'H4', style: 'header-four'},
      {label: 'H5', style: 'header-five'},
      {label: 'H6', style: 'header-six'},
      {label: 'Quote', style: 'blockquote'},
      {label: 'UL', style: 'unordered-list-item'},
      {label: 'OL', style: 'ordered-list-item'},
      {label: 'Code', style: 'code-block'},
    ];
const BlockStyleControls = (props) => {
  const {editorState} = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};

var INLINE_STYLES = [
  {label: 'Bold', style: 'BOLD'},
  {label: 'Italic', style: 'ITALIC'},
];

const InlineStyleControls = (props) => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};


const DraftEditor = React.createClass({
    displayName: "DraftEditor",
    
    getInitialState: function () {
      return {
        editorState: EditorState.createWithContent(convertFromRaw(markdownToDraft(this.props.markdownDefault))),
        markdown: ''
      };
    },

    handleKeyCommand: function (command) {
      const {editorState} = this.state;
      const newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        this.setState({editorState: newState});
        return true;
      }

      return false;
    },

    clear: function () {
      var editorState = EditorState.push(this.state.editorState, ContentState.createFromText(''));
      this.setState({ editorState });
    },

    onChange: function (editorState) {
      var markdown = draftToMarkdown(convertToRaw(editorState.getCurrentContent()));
      this.setState({editorState, markdown});
    },

    onTab: function (e) {
      const maxDepth = 4;
      this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
    },

    toggleBlockType: function (blockType) {
      this.onChange(
        RichUtils.toggleBlockType(
          this.state.editorState,
          blockType
        )
      );
    },

    toggleInlineStyle: function (inlineStyle) {
      this.onChange(
        RichUtils.toggleInlineStyle(
          this.state.editorState,
          inlineStyle
        )
      );
    },

    saveContent: function () {
      this.props.dispatch(entityEditRequest({
        payload: {
          'content.contentBody': this.state.markdown
        }, 
        metadata: {
        branch: [
          this.props.collection,
          this.props.delta,
        ],
        delta: `${this.props.delta}|Update`,
        trigger: `${this.props.delta}`,
      }}))
    },

    render: function () {
      const { editorState } = this.state;
      return (
        <div className="draft-js-editor-wrapper">
          <div className="editor RichEditor-root">
            <Flex w={1} justify='stretch' >
              <Box px={10} w={[1,1, 0.65]} >
                <BlockStyleControls
                editorState={editorState}
                onToggle={this.toggleBlockType}
                />
              </Box>
              <Box px={10} w={[1,1, 0.25]} >
              <InlineStyleControls
                editorState={editorState}
                onToggle={this.toggleInlineStyle}
                />
              </Box>
              <Box w={[1,1, 0.1]}>
                 <Button onClick={this.saveContent} gradient='cherry' w={1} >Save Body</Button>
              </Box>
            </Flex>
            <div className="RichEditor-editor">
              <Box height={[300,450, 600]} bs={2} py={[20,45]} px={[50,80,130]} mt={[20,30]} >
              <PerfectScrollbar>
                <Editor
                  editorState={editorState}
                  handleKeyCommand={this.handleKeyCommand}
                  onChange={this.onChange} />
              </PerfectScrollbar>
              </Box>
            </div>
          </div>
        </div>
      );
    }
  });

  export default connect()(DraftEditor)