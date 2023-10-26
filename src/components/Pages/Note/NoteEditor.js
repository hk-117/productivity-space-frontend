import React from 'react';
import Layout from '../../Layouts/Layout';

export default function NoteEditor(props){
    return(
        <Layout>
            <div className="container vh-90 mt-3">
                <div className='row'>
                    <div className='col-md-6 border rounded-start  p-3'>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="noteTitle" className="form-label">Title</label>
                                <input type="text" className="form-control" id="noteTitle"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="noteContent" className="form-label">Note</label>
                                <textarea className="form-control" id="noteContent" rows="25">
                                    
                                </textarea>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-6 border rounded-end  p-3'>
                        <h1>Output: </h1>
                        <div id="output-div"></div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
