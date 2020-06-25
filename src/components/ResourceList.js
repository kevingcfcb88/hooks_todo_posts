import React from 'react';
import useResourcers from './useResources';

const ResourceList = ({ resource }) => {
  const resources = useResourcers(resource);
  return (
    <ul>
      {resources.map(r => (
        <li key={r.id}>{r.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
//`https://jsonplaceholder.typicode.com/${this.props.resource}`
