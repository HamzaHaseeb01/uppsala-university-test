import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { Editor } from "react-draft-wysiwyg";
import { convertFromRaw, EditorState, RichUtils, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "index.scss";

import style from "./editor.module.scss";

const EditorContainer = ({
  name,
  label,
  control,
  className,
  placeholder,
  errorMessage,
  defaultValue,
  handleChange,
  field,
}) => {
  const [hasList, setHasList] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    const data = convertToRaw(editorState.getCurrentContent());
    
    handleChange(field, data.blocks[0].text);
  }, [editorState]);

  
  return (
    <>
      {label && <label className={style.label}>{label}</label>}
      <div
        className={`${style.editor} ${className}`}
        style={{
          border: errorMessage ? "1px solid #ff5050" : "1px solid #E2E2EA",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {}
        <Editor
          onEditorStateChange={setEditorState}
          placeholder={
            // hasList ? "" : placeholder ? placeholder :
            "Enter Description"
          }
          // editorState={editorState}
          toolbarClassName={style.edit}
          editorClassName={`${style.editorStyle} ${style.customListStyle}`}
          toolbar={{
            options: ["inline", "list", "textAlign", "link"],
            inline: {
              options: ["bold", "italic"],
              bold: { className: style.borderLess },
              italic: { className: style.borderLess },
            },

            list: {
              options: ["unordered", "ordered"],
              ordered: { className: style.borderLess },
              unordered: {
                className: style.borderLess,
              },
            },

            textAlign: {
              inDropdown: false,
              options: ["left", "center", "right"],
              left: { className: style.borderLess },
              center: { className: style.borderLess },
              right: { className: style.borderLess },
            },
            link: {
              inDropdown: false,
              showOpenOptionOnHover: true,
              defaultTargetOption: "_self",
              options: ["link", "unlink"],
              link: { className: style.linkDecorator },
              unlink: { className: style.borderLess },
            },
          }}
        />
      </div>
      {errorMessage && (
        <span className={style.errorMessage}>{errorMessage}</span>
      )}
    </>
  );
};

export default EditorContainer;
