import React from "react";

export default function Task(){
    return (
        <div className="px-4 py-5 my-5 text-center container">
            <img className="d-block mx-auto mb-4" src="http://www.getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
            <h1 className="display-5 fw-bold text-body-emphasis">Tasks</h1>
            <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Quickly create and customize responsive mobile-first notes with the Note app.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Add Task</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Explore</button>
            </div>
            </div>
        </div>
    );
}