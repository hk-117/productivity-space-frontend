import React from "react";

export default function Task(){
    return (
        <div class="px-4 py-5 my-5 text-center container">
            <img class="d-block mx-auto mb-4" src="http://www.getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
            <h1 class="display-5 fw-bold text-body-emphasis">Tasks</h1>
            <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Quickly create and customize responsive mobile-first notes with the Note app.</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Add Task</button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">Explore</button>
            </div>
            </div>
        </div>
    );
}