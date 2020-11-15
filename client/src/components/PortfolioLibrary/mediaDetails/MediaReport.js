import React, { useState, Component, useEffect } from "react";
import WebDetectionStats from "../mediaDetails/WebDetectionStats"
import WebDetectionTable from "../mediaDetails/WebDetectionTable"
import $ from 'jquery';

function MediaReport(props) {
    let setReportContent = (content, obj) => {
        if(content == 'web') {
            $('#h1WebReportHeader').addClass('headerSelected');
            $('#h1SocialReportHeader').removeClass('headerSelected');
        }
        else {
            $('#h1SocialReportHeader').addClass('headerSelected');
            $('#h1WebReportHeader').removeClass('headerSelected');
        }
    }

    useEffect(() => {
        $('#divReportModal').animate({ width: '96%' }, 200);
        $('#divReportContent').animate({ opacity: "100%" }, 150);
        return () => {
            $('#divReportModal').animate({ width: '0%' }, 200);
            $('#divReportContent').animate({ opacity: "0%" }, 150);
        }
    },[])
    return (
        <div id='divReportMedia'>
            <div id="fb-root"></div>
            <div id='divReportModal' className='reportModal' style={{ width: '0%' }}>
                <div id='divReportContent' style={{ opacity: '0%' }} className="reportContainer">
                    <div id='divReportHeader' className='reportHeaderSelectors'>
                        <h1 id="h1WebReportHeader" className="headerSelected" onClick={(e)=> {setReportContent('web', e)}}>Web Detection Report</h1>
                        <h1 id="h1SocialReportHeader" onClick={(e)=> {setReportContent('social', e)}}>Social Media Report</h1>
                    </div>
                    <WebDetectionStats location={props.location} webReport={props.webReport}/>
                    <WebDetectionTable location={props.location} webReport={props.webReport}/>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default MediaReport