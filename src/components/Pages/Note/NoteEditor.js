import React,{useState} from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Layout from '../../Layouts/Layout';

export default function NoteEditor(props){
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");

    function changeTitleHandler(e){
        setTitle(e.target.value);
    }

    function changeContentHandler(e){
        setContent(e.target.value);
    }

    return(
        <Layout>
            <div className="container vh-90 mt-3">
                <div className='row'>
                    <div className='col-md-6 border rounded-start  p-3'>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="noteTitle" className="form-label">Title</label>
                                <input type="text" className="form-control" id="noteTitle" value={title} onChange={changeTitleHandler}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="noteContent" className="form-label">Note</label>
                                <textarea className="form-control" id="noteContent" rows="25" value={content} onChange={changeContentHandler}>
                                    
                                </textarea>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-6 border rounded-end  p-3'>
                        <h1> {title} </h1>
                        <div id="output-div" className='text-break'>
                            <Markdown remarkPlugins={[remarkGfm]}>
                                {content}
                            </Markdown>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
