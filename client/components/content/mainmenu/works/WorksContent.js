import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {mdConverter} from "../../../../../utils/mdModifier";
import {decapitalizeFirstLetter} from "../../../../../utils/stringModifier";
import {highlightCode} from "../../../../../utils/mdModifier";

class WorksContent extends Component {
    render() {
        const dateCreated = new Date(this.props.dateCreated);
        const dateInFormat = dateCreated.getFullYear() + "년 " + (dateCreated.getMonth() + 1) + "월 " + dateCreated.getDate() + "일";

        return (
            <div className={"content-view-wrapper"}>
                <div id={this.props.postNo}
                     className={["content-view", decapitalizeFirstLetter(this.props.belongToMajor)].join(' ')}>
                    <Link className={"react-router-link"} to={["/postviewer", this.props.postNo].join('/')}>
                        <div className="content-preview" ref={element => highlightCode(element)}>
                            <div className="post-meta-info">
                                <i className="far fa-calendar-alt"><span>{" " + dateInFormat}</span></i>
                                {/* <i className="fas fa-comment-dots"><span>{" " + this.props.commentsCount}</span></i> */}
                            </div>
                            <h1>{this.props.title}</h1>
                            {mdConverter(this.props.content)}
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default WorksContent;