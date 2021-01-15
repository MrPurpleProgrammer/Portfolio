import React, { Component } from "react";
import uploadLogo from '../../../assets/SVG/UploadIcon.svg';
import UploadInput from '../../PortfolioLibrary/uploadInput/UploadInput.js'
import $ from 'jquery';
import * as noUiSlider from '../../../../node_modules/nouislider/distribute/nouislider.min.js';
import '../../../../node_modules/nouislider/distribute/nouislider.min.css'
import './filter_toolbar.scss';

function transformScroll(event) {
    if (!event.deltaY) {
        return;
    }
    event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
    event.preventDefault();
}

class FilterToolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toolbarExpand: false,
        };
    }
    componentDidMount() {
        $(function () {
            $('.colorInput').on('click', function () {
                $(this).closest('.colorBox').toggleClass("opacityToggle");
            })
        });
        $(function () {
            $('.tagOption').on('click', function () {
                $(this).toggleClass("buttonActive");
            })
        });
        $(function () {
            $('.orientBox').on('click', function () {
                $(this).find('i').toggle();
                $(this).toggleClass('orientSelectBox');
            })
        });
        $(function () {
            $('.sortOption').on('click', function () {
                $('.sortFilter').addClass('noOpacity');
                $(this).find('div').removeClass('noOpacity');
            })
        })
        $(function () {
            $('.uploadOption').on('click', function () {
                $('.uploadFilter').addClass('noOpacity');
                $(this).find('div').removeClass('noOpacity');
            })
        })
        var element = document.getElementById('divAccountToolbar');
        element.addEventListener('wheel', transformScroll);
        var slider = document.getElementById('priceSlider');
        noUiSlider.create(slider, {
            start: [0, 10000],
            tooltips: [true, true],
            connect: true,
            range: {
                'min': 1,
                'max': 10000
            }
        });
    }
    toggleToolbar = () => {
        if (this.state.toolbarExpand == false) {
            $('#divMediaGallery').animate({ padding: '595px 65px 0px' }, 500)
            $("#divAccountToolbar").animate({ height: '300px' }, 500,
                () => {
                    this.setState({
                        toolbarExpand: true
                    });
                    $('.accountToolBarContent').css({ display: "flex" });
                    $('#divToolBarContent').animate({ opacity: 1 }, 200);
                }
            );
        }
        else if (this.state.toolbarExpand == true) {
            $('#divToolBarContent').animate({ opacity: 0 }, 200);
            $('.accountToolBarContent').css({ display: "none" });
            $('#divMediaGallery').animate({ padding: '350px 65px 0px' }, 500)
            $("#divAccountToolbar").animate({ height: '55px' }, 500,
                () => {
                    this.setState({
                        toolbarExpand: false
                    });
                }
            );
        }
    }
    handleCheckBox(o) {
        $(o).closest('.colorBox').css('opacity', 1);
    }
    render() {
        return (
            <div id="divAccountToolbar" className="accountToolbar" style={{ height: '55px' }}>
                <div className="accountToolBarHeader" onClick={this.toggleToolbar}>
                    <p>Toolbar</p>
                    <i className="fas fa-angle-double-down"></i>
                </div>
                <div id="divToolBarContent" className="accountToolBarContent">
                    <div id='divUploadInput' className="uploadTool">
                        <UploadInput match={this.props.match} accountId={this.props.accountId}/>
                    </div>
                    <div className="refineTools">
                        <div className="refineTitle">
                            <i className="fas fa-filter"></i>
                            <p>Refine</p>
                            <i className="fas fa-chevron-down" style={{ marginLeft: "12px", fontSize: "10px", paddingTop: "20px" }}></i>
                            <p style={{ padding: "0px 136px" }}>Clear</p>
                        </div>
                        <div className="refineFilters">
                            <div className="radioRefine">
                                <h1 className="toolTitle">Sort by</h1>
                                <div className="filterRadioOption sortOption">
                                    <div className="filterRadioButton_Inner sortFilter"></div>
                                    <p>Best Match</p>
                                </div>
                                <div className="filterRadioOption sortOption">
                                    <div className="filterRadioButton_Inner noOpacity sortFilter"></div>
                                    <p>Newest</p>
                                </div>
                                <div className="filterRadioOption sortOption">
                                    <div className="filterRadioButton_Inner noOpacity sortFilter"></div>
                                    <p>Most Popular</p>
                                </div>
                                <div className="filterRadioOption sortOption">
                                    <div className="filterRadioButton_Inner noOpacity sortFilter"></div>
                                    <p>Oldest</p>
                                </div>
                            </div>
                            <div className="uploadRefine">
                                <div className="radioRefine">
                                    <h1 className="toolTitle">Upload date</h1>
                                    <div className="filterRadioOption uploadOption">
                                        <div className="filterRadioButton_Inner uploadFilter"></div>
                                        <p>Last 24 Hours</p>
                                    </div>
                                    <div className="filterRadioOption uploadOption">
                                        <div className="filterRadioButton_Inner noOpacity uploadFilter"></div>
                                        <p>Last 7 Days</p>
                                    </div>
                                    <div className="filterRadioOption uploadOption">
                                        <div className="filterRadioButton_Inner noOpacity uploadFilter"></div>
                                        <p>Last 30 Days</p>
                                    </div>
                                    <div className="filterRadioOption uploadOption">
                                        <div className="filterRadioButton_Inner noOpacity uploadFilter"></div>
                                        <p>Last 12 Months</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tagColorRefine">
                                <div className="colorFilters">
                                    <h1 className="toolTitle">Color</h1>
                                    <div className="colorOptions">
                                        <div className="colorBox" style={{ backgroundColor: "white" }}>
                                            <i className="fas fa-check"></i>
                                            <input className="colorInput" type="checkbox" />
                                        </div>
                                        <div className="colorBox" style={{ backgroundColor: "aliceblue" }}>
                                            <i className="fas fa-check"></i>
                                            <input className="colorInput" type="checkbox" />
                                        </div>
                                        <div className="colorBox" style={{ backgroundColor: "blue" }}>
                                            <i className="fas fa-check"></i>
                                            <input className="colorInput" type="checkbox" />
                                        </div>
                                        <div className="colorBox" style={{ backgroundColor: "green" }}>
                                            <i className="fas fa-check"></i>
                                            <input className="colorInput" type="checkbox" />
                                        </div>
                                        <div className="colorBox" style={{ backgroundColor: "yellow" }}>
                                            <i className="fas fa-check"></i>
                                            <input className="colorInput" type="checkbox" />
                                        </div>
                                        <div className="colorBox" style={{ backgroundColor: "cyan" }}>
                                            <i className="fas fa-check"></i>
                                            <input className="colorInput" type="checkbox" />
                                        </div>
                                        <div className="colorBox" style={{ backgroundColor: "grey" }}>
                                            <i className="fas fa-check"></i>
                                            <input className="colorInput" type="checkbox" />
                                        </div>
                                        <div className="colorBox" style={{ backgroundColor: "black" }}>
                                            <i className="fas fa-check"></i>
                                            <input className="colorInput" type="checkbox" />
                                        </div>
                                        <div className="colorBox" style={{ backgroundColor: "red" }}>
                                            <i className="fas fa-check"></i>
                                            <input className="colorInput" type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                                <div className="toggleFilters">
                                    <div className="tagRefine searchBarOption">
                                        <h1 className="toolTitle">Search in</h1>
                                        <button className="tagOption">All</button>
                                        <button className="tagOption">Tags</button>
                                    </div>
                                    <div className="tagRefine searchBarOption" style={{ marginLeft: "30px" }}>
                                        <h1 className="toolTitle">Search in</h1>
                                        <button className="tagOption tagOptionSmall">S</button>
                                        <button className="tagOption tagOptionSmall">M</button>
                                        <button className="tagOption tagOptionSmall">L</button>
                                    </div>
                                </div>
                            </div>
                            <div className="priceOrienttionRefine">
                                <div className="priceFilters">
                                    <h1 className="toolTitle">Price Range</h1>
                                    <div id="priceSlider">
                                        {/*Using noUiSlider plugin to build a price range input */}
                                    </div>
                                </div>
                                <div className="orientationFilters">
                                    <h1 className="toolTitle">Orientation</h1>
                                    <div className="orientationOptions">
                                        <div className="landscape orientBox">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        <div className="portrait orientBox">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        <div className="square orientBox">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        <div className="rectangle orientBox">
                                            <i className="fas fa-check"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilterToolbar;