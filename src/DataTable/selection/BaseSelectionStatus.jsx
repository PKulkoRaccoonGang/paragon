import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Button } from '../..';
import DataTableContext from '../DataTableContext';
import {
  SELECT_ALL_TEST_ID,
  CLEAR_SELECTION_TEST_ID,
} from './data/constants';

const BaseSelectionStatus = ({
  className,
  clearSelectionText,
  numSelectedRows,
  onSelectAll,
  onClear,
  selectAllText,
  allSelectedText,
  selectedText,
}) => {
  const { itemCount } = useContext(DataTableContext);
  const isAllRowsSelected = numSelectedRows === itemCount;
  const intlAllSelectedText = allSelectedText || (
    <FormattedMessage
      id="pgn.DataTable.BaseSelectionStatus.allSelectedText"
      defaultMessage="All {numSelectedRows} selected"
      description="Text for all selected label"
      values={{ numSelectedRows }}
    />
  );
  const intlSelectedText = selectedText || (
    <FormattedMessage
      id="pgn.DataTable.BaseSelectionStatus.selectedText"
      defaultMessage="{numSelectedRows} selected"
      description="Text for selected label"
      values={{ numSelectedRows }}
    />
  );
  return (
    <div className={className}>
      <span>{isAllRowsSelected ? intlAllSelectedText : intlSelectedText}</span>
      {!isAllRowsSelected && (
        <Button
          className={SELECT_ALL_TEST_ID}
          variant="link"
          size="inline"
          onClick={onSelectAll}
        >
          {selectAllText || (
            <FormattedMessage
              id="pgn.DataTable.BaseSelectionStatus.selectAllText"
              defaultMessage="Select all {itemCount}"
              description="A label for select all button."
              values={{ itemCount }}
            />
          )}
        </Button>
      )}
      {numSelectedRows > 0 && (
        <Button
          className={CLEAR_SELECTION_TEST_ID}
          variant="link"
          size="inline"
          onClick={onClear}
        >
          {clearSelectionText || (
            <FormattedMessage
              id="pgn.DataTable.BaseSelectionStatus.clearSelectionText"
              defaultMessage="Clear selection"
              description="A label of clear all selection button."
            />
          )}
        </Button>
      )}
    </div>
  );
};

BaseSelectionStatus.defaultProps = {
  className: undefined,
  selectAllText: undefined,
  allSelectedText: undefined,
  selectedText: undefined,
  clearSelectionText: undefined,
};

BaseSelectionStatus.propTypes = {
  /** A class name to append to the base element */
  className: PropTypes.string,
  /** A text that appears on the `Clear selection` button, defaults to 'Clear selection' */
  clearSelectionText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Count of selected rows in the table. */
  numSelectedRows: PropTypes.number.isRequired,
  /** A handler for 'Select all' button. */
  onSelectAll: PropTypes.func.isRequired,
  /** A handler for 'Clear selection' button. */
  onClear: PropTypes.func.isRequired,
  /** A text that appears on the `Select all` button, defaults to 'Select All {itemCount}' */
  selectAllText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** A text that appears when all items have been selected, defaults to 'All {numSelectedRows} selected' */
  allSelectedText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** A text that appears when some items have been selected, defaults to '{numSelectedRows} selected' */
  selectedText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default BaseSelectionStatus;
