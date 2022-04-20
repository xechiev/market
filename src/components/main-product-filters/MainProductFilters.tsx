import React, { useState } from 'react';
import {
  Input, Checkbox, Row, Dropdown, Radio, RadioChangeEvent,
} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { condition, dataFilter } from './constants/dataFilters';
import { TypeStateFilter } from '../../types/filterTypes/typeStateFilter';
import 'antd/dist/antd.css';
import classes from './MainProductFilters.module.scss';
import FilterDropdownGroups from './components/filter-dropdown-groups';

const CheckboxGroup = Checkbox.Group;

function MainProductFilters () {
  const optionsSexCategory = [
    { label: 'Мужское', value: 'Мужское' },
    { label: 'Женское', value: 'Женское' },
  ];
  const [checkedListTypeDeal, setCheckedListTypeDeal] = useState<TypeStateFilter>([]);
  const [checkedListConditionProduct, setCheckedListConditionProduct] = useState<TypeStateFilter>([]);
  const [categorySex, setCategorySex] = useState<RadioChangeEvent | string>();

  return (
    <div className={classes.container}>
      <div className={classes.filterWrapper}>
        <div className={classes.titleFilter}> Сортировать:</div>
        <Radio.Group name="radiogroup" defaultValue={1} style={{ display: 'flex', flexDirection: 'column' }}>
          <Radio value={1}>По возрастанию цены</Radio>
          <Radio value={2}>По Убыванию цены</Radio>
          <Radio value={3}>По рейтингу</Radio>
        </Radio.Group>
        <div className={classes.titleFilter}>Цена:</div>
        <Input.Group compact>
          <Input style={{ width: '85px', textAlign: 'center' }} placeholder="Minimum" />
          <Input
            className="site-input-split"
            style={{
              width: '30px', borderLeft: 0, borderRight: 0, pointerEvents: 'none',
            }}
            placeholder="~"
            disabled
          />
          <Input
            className="site-input-right"
            style={{ width: '85px', textAlign: 'center' }}
            placeholder="Maximum"
          />
        </Input.Group>
        <Radio.Group
          options={optionsSexCategory}
          onChange={(event:RadioChangeEvent) => setCategorySex(event.target.value)}
          defaultValue="Мужское"
          value={categorySex}
          optionType="button"
          buttonStyle="solid"
          style={{ textAlign: 'center', width: '200px', marginTop: '3px' }}
          size="large"
        />
        <div>
          <Dropdown
            overlay={(
              <FilterDropdownGroups
                dataFilter={categorySex === 'Мужское' ? dataFilter.categoryMan : dataFilter.categoryWoman}
              />
            )}
          >
            <button
              type="submit"
              className="ant-dropdown-link"
              onClick={(event) => event.preventDefault()}
              style={{
                border: 'none', backgroundColor: 'white', fontWeight: 'bold', marginTop: '3px',
              }}
            >
              Категория
              <DownOutlined />
            </button>
          </Dropdown>
        </div>
        <div>
          <Dropdown overlay={<FilterDropdownGroups dataFilter={dataFilter.size} />}>
            <button
              type="submit"
              className="ant-dropdown-link"
              onClick={(event) => event.preventDefault()}
              style={{ border: 'none', backgroundColor: 'white', fontWeight: 'bold' }}
            >
              Размер
              <DownOutlined />
            </button>
          </Dropdown>
        </div>
        <Checkbox.Group
          style={{
            width: '100%', display: 'flex', flexDirection: 'column', marginTop: '10px',
          }}
          onChange={(list: CheckboxValueType[]) => setCheckedListTypeDeal(list)}
          value={checkedListTypeDeal}
        >
          <Row>
            <Checkbox value="Безопасная сделка">Безопасная сделка</Checkbox>
          </Row>
          <Row>
            <Checkbox value="Обмен">Обмен</Checkbox>
          </Row>
        </Checkbox.Group>
        <div>
          <span className={classes.titleFilter}>Состояние:</span>
          <CheckboxGroup
            options={condition}
            value={checkedListConditionProduct}
            onChange={(list:CheckboxValueType[]) => setCheckedListConditionProduct(list)}
            style={{
              width: '100%', display: 'flex', flexDirection: 'column', marginTop: '10px',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MainProductFilters;
