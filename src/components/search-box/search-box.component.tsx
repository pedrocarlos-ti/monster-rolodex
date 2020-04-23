import React from 'react';

import './search-box.styles.css';

interface Props {
  placeholder: string;
  handleChange: React.ChangeEventHandler;
}

export function SearchBox({
  placeholder,
  handleChange,
}: Props): React.ReactElement {
  return (
    <input
      type="search"
      className="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}
