// Vendor Libraries
import React from 'react'
import { FaBed } from 'react-icons/fa';
import { IconContext } from "react-icons";

// Styles
import { resourceWrapper, resourceSideBar } from './styles'

export default ({resourceClicked, width, resources, height }) => (
   <div className='resource-wrapper' style={Object.assign({ width: `${width}px` }, resourceWrapper) }>
    { resources.map(resource => (
        <div
          onClick={(e) => resourceClicked(resource)}
          className='resource-cell'
          key={resource.id}
          style={Object.assign({ height, lineHeight: `${height}px`,padding: '6px' }, resourceSideBar)}>
           <FaBed style={{color:"blue"}} />
        </div>
      ))
    }
  </div>
)
