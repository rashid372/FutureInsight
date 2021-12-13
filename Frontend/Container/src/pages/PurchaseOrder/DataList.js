
import * as React from 'react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import items from './data.json';
import {
  DetailsList,
  ConstrainMode,
  DetailsListLayoutMode,
  SelectionMode,
  mergeStyleSets,
  TooltipHost,
  CheckboxVisibility,
  Label,
  Pivot, PivotItem
} from '@fluentui/react';

const columns = [
  {
    key: 'orderNumber',
    name: 'Order Number',
    fieldName: 'orderNumber',
    minWidth: 50,
    maxWidth: 100,
  },
  {
    key: 'orderDate',
    name: 'Order Date',
    fieldName: 'orderDate',
    minWidth: 100,
    maxWidth: 200,
  },
  {
    key: 'supplier',
    name: 'Supplier',
    fieldName: 'supplier',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: 'product',
    name: 'Product',
    fieldName: 'product',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: 'productQty',
    name: 'Quantity',
    fieldName: 'productQty',
    minWidth: 50,
    maxWidth: 100,
    isResizable: true,
  },
  {
    key: 'remark',
    name: 'Remark',
    fieldName: 'remark',
    minWidth: 200,
    maxWidth: 300,
    isResizable: true,
  },
];

const gridStyles = {
  root: {
    selectors: {
      '& [role=grid]': {
        height: '70vh',
      },
    },
  },
};

const classNames = mergeStyleSets({
  header: {
    margin: '.5em 0',
  },
});

function DataList(props) {
  const onRenderDetailsHeader = (props, defaultRender) => {
    if (!props) {
      return null;
    }
    const onRenderColumnHeaderTooltip = tooltipHostProps => (
      <TooltipHost {...tooltipHostProps} />
    );

    return defaultRender({
      ...props,
      onRenderColumnHeaderTooltip,
    });
  };
  const [selectedKey, setSelectedKey] = React.useState(0);
  const onButtonClick = () => {
    setSelectedKey((selectedKey + 1) % 3);
  };
  return (
    <div>
      <h1 className={classNames.header}>Question Authoring</h1>
      <Pivot aria-label="Override Selected Item Pivot Example" selectedKey={String(selectedKey)}>
        <PivotItem headerText="My Files" itemKey="0">
          <Label>Pivot #1</Label>
        </PivotItem>
        <PivotItem headerText="Recent" itemKey="1">
          <Label>Pivot #2</Label>
        </PivotItem>
        <PivotItem headerText="Shared with me" itemKey="2">
          <Label>Pivot #3</Label>
        </PivotItem>
      </Pivot>
      <DefaultButton onClick={onButtonClick}>Select next item</DefaultButton>
      {' '}
    </div>
  );
}

export default DataList;
