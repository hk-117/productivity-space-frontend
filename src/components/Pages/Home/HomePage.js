import React from "react";
import Layout from "../../Layouts/Layout";
import Note from "./Note";
import Task from "./Task";

export default function HomePage(props){
    return (
        <Layout>
            <Note/>
            <Task/>
        </Layout>
    );
}