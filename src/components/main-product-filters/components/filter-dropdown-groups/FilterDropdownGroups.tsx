import { Menu } from 'antd';
import React from 'react';
import FilterGroupContainer from '../filter-group-container/FilterGroupContainer';

const { SubMenu } = Menu;
interface DataFilter {
  dataFilter: {
    title:string,
    data: string[]
  }[]
}
function FilterDropdownGroups ({ dataFilter }: DataFilter) {
  const filterDownElem = dataFilter.map((item) => {
    const { title, data } = item;

    return (
      <SubMenu title={title} key={title}>
        <FilterGroupContainer options={data} />
      </SubMenu>
    );
  });

  return (
    <Menu>
      {filterDownElem}
    </Menu>
  );
}

export default FilterDropdownGroups;
