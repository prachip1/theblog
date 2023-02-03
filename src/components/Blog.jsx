import React from "react";
import { EditorState } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Blog = () =>{
    return(
        <div className="relative flex mb-8">
          <div className="w-3/4 ml-6 drop-shadow-2xl h-screen mt-28 bg-purple-200">
          <Editor/>
          </div>

          <div className="w-1/4 ml-4 mt-32">
            <button className="border-2 border-black text-slate-900 p-4">Publish</button>
            <button className=" text-slate-900 p-4">Delete</button>
          </div>
          
        </div>
    )
}

export default Blog;