import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LinkedInEmbed } from 'react-social-media-embed';

export default class MainMarketPlace extends Component {

    render() {


        return (

            <div class="container">

                <div class="row text-center mb-5">

                    <div class="col">

                        <h1>Über uns</h1>

                    </div>

                </div>


                <div class="row justify-content-md-center mb-4">

                        <div class="col">

                                <LinkedInEmbed 
                                  url="https://www.linkedin.com/feed/update/urn:li:activity:7086713615205945418"
                                  width={325}
                                  height={500} 
                                  style={{marginLeft: "auto", marginRight: "auto"}}
                                />
                        </div>

                </div>

                <div class="row justify-content-md-center mb-4">

                    <div class="col">

                            <LinkedInEmbed 
                              url="https://www.linkedin.com/feed/update/urn:li:activity:7086713615205945418"
                              width={325}
                              height={500} 
                              style={{marginLeft: "auto", marginRight: "auto"}}
                            />
                    </div>

                </div>

                <div class="row justify-content-md-center mb-4">

                    <div class="col">

                            <LinkedInEmbed 
                              url="https://www.linkedin.com/feed/update/urn:li:activity:7086713615205945418"
                              width={325}
                              height={500} 
                              style={{marginLeft: "auto", marginRight: "auto"}}
                            />
                    </div>

                </div>

                <div class="row justify-content-md-center mb-4">

                    <div class="col">

                            <LinkedInEmbed 
                              url="https://www.linkedin.com/feed/update/urn:li:activity:7086713615205945418"
                              width={325}
                              height={500} 
                              style={{marginLeft: "auto", marginRight: "auto"}}
                            />
                    </div>

                </div>

                
            </div>
        )

    }

}