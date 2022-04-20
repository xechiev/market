import React, { useState } from 'react';
import { Checkbox } from 'antd';
import { TypeStateFilter } from '../../../../types/filterTypes/typeStateFilter';

const CheckboxGroup = Checkbox.Group;
interface FilterGroupProps {
  options: string[]
}

function FilterGroupContainer ({ options }:FilterGroupProps) {
  const [checkedList, setCheckedList] = useState<TypeStateFilter>([]);
  const onChange = (list:TypeStateFilter) => {
    setCheckedList(list);
  };

  return (
    <CheckboxGroup
      options={options}
      value={checkedList}
      onChange={onChange}
      style={{
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '10px',
        marginLeft: '10px',
      }}
    />
  );
}

export default FilterGroupContainer;
