import React, { PureComponent } from 'react';

class SocialButtons extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Social Buttons with Font Awesome Icons
                    </div>
                    {/* <!-- /.panel-heading --> */}
                    <div className="panel-body">
                        <h4>Social Buttons</h4>
                        <a className="btn btn-block btn-social btn-bitbucket">
                            <i className="fa fa-bitbucket"></i> Sign in with Bitbucket
                        </a>
                        <a className="btn btn-block btn-social btn-dropbox">
                            <i className="fa fa-dropbox"></i> Sign in with Dropbox
                        </a>
                        <a className="btn btn-block btn-social btn-facebook">
                            <i className="fa fa-facebook"></i> Sign in with Facebook
                        </a>
                        <a className="btn btn-block btn-social btn-flickr">
                            <i className="fa fa-flickr"></i> Sign in with Flickr
                        </a>
                        <a className="btn btn-block btn-social btn-github">
                            <i className="fa fa-github"></i> Sign in with GitHub
                        </a>
                        <a className="btn btn-block btn-social btn-google-plus">
                            <i className="fa fa-google-plus"></i> Sign in with Google
                        </a>
                        <a className="btn btn-block btn-social btn-instagram">
                            <i className="fa fa-instagram"></i> Sign in with Instagram
                        </a>
                        <a className="btn btn-block btn-social btn-linkedin">
                            <i className="fa fa-linkedin"></i> Sign in with LinkedIn
                        </a>
                        <a className="btn btn-block btn-social btn-pinterest">
                            <i className="fa fa-pinterest"></i> Sign in with Pinterest
                        </a>
                        <a className="btn btn-block btn-social btn-tumblr">
                            <i className="fa fa-tumblr"></i> Sign in with Tumblr
                        </a>
                        <a className="btn btn-block btn-social btn-twitter">
                            <i className="fa fa-twitter"></i> Sign in with Twitter
                        </a>
                        <a className="btn btn-block btn-social btn-vk">
                            <i className="fa fa-vk"></i> Sign in with VK
                        </a>

                        <hr/>

                        <div className="text-center">
                            <a className="btn btn-social-icon btn-bitbucket"><i className="fa fa-bitbucket"></i></a>
                            <a className="btn btn-social-icon btn-dropbox"><i className="fa fa-dropbox"></i></a>
                            <a className="btn btn-social-icon btn-facebook"><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-flickr"><i className="fa fa-flickr"></i></a>
                            <a className="btn btn-social-icon btn-github"><i className="fa fa-github"></i></a>
                            <a className="btn btn-social-icon btn-google-plus"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-instagram"><i className="fa fa-instagram"></i></a>
                            <a className="btn btn-social-icon btn-linkedin"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-pinterest"><i className="fa fa-pinterest"></i></a>
                            <a className="btn btn-social-icon btn-tumblr"><i className="fa fa-tumblr"></i></a>
                            <a className="btn btn-social-icon btn-twitter"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-vk"><i className="fa fa-vk"></i></a>
                        </div>
                    </div>
                    {/* <!-- /.panel-body --> */}
                </div>
                {/* <!-- /.panel --> */}
            </React.Fragment>
         );
    }
}
 
export default SocialButtons;