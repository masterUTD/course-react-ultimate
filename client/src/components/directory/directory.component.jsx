import React from 'react';

import MenuIten from '../menu-item/menu-item.component'

import { connect } from 'react-redux';
import {selectDirectorySections } from '../../redux/directory/directory.selectors'
import { createStructuredSelector}  from 'reselect'
import './directory.styles.scss';


const Directory = ({ sections }) => (

            <div className="directory-menu">
                {
                    sections.map(({id, ...otherSectiosProps}) => (
                        <MenuIten key = {id} {...otherSectiosProps} />

                    ))
                }

            </div>

        );

    const mapStateToProps = createStructuredSelector({
          sections: selectDirectorySections

    })


export default connect(mapStateToProps) (Directory);