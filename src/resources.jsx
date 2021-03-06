// Vendor Libraries
import React from 'react'

// Styles
import { resourceWrapper, resourceSideBar } from './styles'

export default ({resourceClicked, width, resources, height }) => (
   <div className='resource-wrapper' style={Object.assign({ width: `${width}px` }, resourceWrapper) }>
    { resources.map(resource => (
        <div
          onClick={(e) => resourceClicked(resource)}
          className='resource-cell'
          key={resource.id}
          style={Object.assign({ height, lineHeight: `${height}px`,padding: '2px' }, resourceSideBar)}>
          {resource.name}
        </div>
      ))
    }
  </div>
)
