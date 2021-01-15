import React, { Component } from 'react';
import ai from '../../../assets/SVG/FileIcons/ai.svg'
import psd from '../../../assets/SVG/FileIcons/psd.svg'
import docx from '../../../assets/SVG/FileIcons/docx.svg'
import pptx from '../../../assets/SVG/FileIcons/pptx.svg'
import xlsx from '../../../assets/SVG/FileIcons/xlsx.svg'
import pdf from '../../../assets/SVG/FileIcons/pdf.svg'
import gif from '../../../assets/SVG/FileIcons/gif.svg'
import mp3 from '../../../assets/SVG/FileIcons/mp3.svg'
import txt from '../../../assets/SVG/FileIcons/txt.svg'
import zip from '../../../assets/SVG/FileIcons/zip.svg'
import json from '../../../assets/SVG/FileIcons/json.svg'
import rar from '../../../assets/SVG/FileIcons/rar.svg'
import wav from '../../../assets/SVG/FileIcons/wav.svg'
import avi from '../../../assets/SVG/FileIcons/avi.svg'
import mov from '../../../assets/SVG/FileIcons/mov.svg'
import exe from '../../../assets/SVG/FileIcons/exe.svg'
import dmg from '../../../assets/SVG/FileIcons/dmg.svg'
import ttf from '../../../assets/SVG/FileIcons/ttf.svg'
import otf from '../../../assets/SVG/FileIcons/otf.svg'
import tif from '../../../assets/SVG/FileIcons/tif.svg'
import wma from '../../../assets/SVG/FileIcons/wma.svg'
import mpg from '../../../assets/SVG/FileIcons/mpg.svg'
import flv from '../../../assets/SVG/FileIcons/flv.svg'
import ps from '../../../assets/SVG/FileIcons/ps.svg'
import file from '../../../assets/SVG/FileIcons/file.svg'
import html from '../../../assets/SVG/FileIcons/html.svg'

let iconset = {
    "ai": ai,
    "psd": psd,
    "docx": docx,
    "xlsx": xlsx,
    "pptx": pptx,
    "pdf": pdf,
    "gif": gif,
    "mp3": mp3,
    "txt": txt,
    "zip": zip,
    "json": json,
    "rar": rar,
    "wav": wav,
    "avi": avi,
    "mov": mov,
    "exe": exe,
    "dmg": dmg,
    "ttf": ttf,
    "otf": otf,
    "tif": tif,
    "wma": wma,
    "mpg": mpg,
    "flv": flv,
    "ps": ps,
    "file": file,
    "html": html
}
class IconGenerator extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    getFileIcon() {
        if(typeof iconset[this.props.extension] != 'undefined') {
            return iconset[this.props.extension];
        }
        else {
            return iconset[file];
        }
    }
    render() {
        return (
            <img
                src={this.getFileIcon()}
                className={this.props.class}
            />
        )
    }
}
export default IconGenerator;